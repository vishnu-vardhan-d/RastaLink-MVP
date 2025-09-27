import { Octokit } from '@octokit/rest'

let connectionSettings;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function createGitHubRepo(name, description, isPrivate = false) {
  const octokit = await getUncachableGitHubClient();
  
  try {
    console.log(`Creating GitHub repository: ${name}...`);
    
    const response = await octokit.rest.repos.createForAuthenticatedUser({
      name: name,
      description: description,
      private: isPrivate,
      has_issues: true,
      has_projects: true,
      has_wiki: false,
      auto_init: false
    });
    
    console.log(`✅ Repository created: ${response.data.html_url}`);
    return response.data;
  } catch (error) {
    if (error.status === 422) {
      console.log(`Repository ${name} already exists, skipping creation...`);
      // Get existing repo info
      const user = await octokit.rest.users.getAuthenticated();
      const existingRepo = await octokit.rest.repos.get({
        owner: user.data.login,
        repo: name
      });
      return existingRepo.data;
    } else {
      throw error;
    }
  }
}

async function main() {
  try {
    console.log('🚀 Starting GitHub repository sync...\n');

    // Create backend repository
    const backendRepo = await createGitHubRepo(
      'rastalink-backend',
      'RastaLink Backend - Java Spring Boot API for AI-powered trucking platform',
      false
    );

    // Create frontend repository  
    const frontendRepo = await createGitHubRepo(
      'rastalink-frontend', 
      'RastaLink Frontend - React web application for trucking platform with industrial design',
      false
    );

    console.log('\n📋 Repository URLs:');
    console.log(`Backend:  ${backendRepo.html_url}`);
    console.log(`Frontend: ${frontendRepo.html_url}`);
    console.log(`Backend Git URL:  ${backendRepo.clone_url}`);
    console.log(`Frontend Git URL: ${frontendRepo.clone_url}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();