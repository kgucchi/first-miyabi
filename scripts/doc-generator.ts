/**
 * Miyabi Documentation Generator
 *
 * This script generates documentation for the Miyabi project.
 * It scans the project structure and creates comprehensive documentation.
 */

import * as fs from 'fs';
import * as path from 'path';

interface DocSection {
  title: string;
  content: string;
}

class DocumentationGenerator {
  private sections: DocSection[] = [];

  constructor(private projectRoot: string) {}

  async generate(): Promise<void> {
    console.log('📚 Generating documentation...');

    this.addProjectOverview();
    this.addAgentDocumentation();
    this.addUsageExamples();
    this.addAPIReference();

    await this.writeDocumentation();

    console.log('✅ Documentation generated successfully!');
  }

  private addProjectOverview(): void {
    this.sections.push({
      title: 'Project Overview',
      content: `
# First Miyabi Project Documentation

## Overview
This project uses Miyabi Agentic OS for autonomous development.

## Quick Start
\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build project
npm run build

# Run tests
npm test
\`\`\`
      `.trim()
    });
  }

  private addAgentDocumentation(): void {
    this.sections.push({
      title: 'Available Agents',
      content: `
## Miyabi Agents

### Coordinator
- **Purpose**: Task orchestration and DAG decomposition
- **Responsibilities**: Issue breakdown, parallel execution control, agent assignment

### Codegen
- **Purpose**: AI-driven code generation
- **Responsibilities**: TypeScript generation, automated test creation

### Review
- **Purpose**: Code quality assessment
- **Responsibilities**: Static analysis, security scanning (80+ score for approval)

### Issue
- **Purpose**: Issue analysis and labeling
- **Responsibilities**: 65-label organizational design system, automatic classification

### PR
- **Purpose**: Pull request automation
- **Responsibilities**: Draft PR creation, Conventional Commits compliance

### Deploy
- **Purpose**: CI/CD deployment
- **Responsibilities**: Firebase deploy, health checks, rollback

### Mizusumashi
- **Purpose**: Super App Designer
- **Responsibilities**: App YAML auto-generation, self-healing functions
      `.trim()
    });
  }

  private addUsageExamples(): void {
    this.sections.push({
      title: 'Usage Examples',
      content: `
## Usage Examples

### Run Automatic Mode
\`\`\`bash
GITHUB_TOKEN=<token> npx miyabi auto -y
\`\`\`

### Run Specific Agent
\`\`\`bash
GITHUB_TOKEN=<token> npx miyabi agent run codegen --issue=123
\`\`\`

### Check Project Status
\`\`\`bash
GITHUB_TOKEN=<token> npx miyabi status -y
\`\`\`

### Generate Issues from TODOs
\`\`\`bash
GITHUB_TOKEN=<token> npx miyabi todos -y
\`\`\`
      `.trim()
    });
  }

  private addAPIReference(): void {
    this.sections.push({
      title: 'API Reference',
      content: `
## API Reference

### Main Entry Point
\`\`\`typescript
import { main } from './src/index';

main();
\`\`\`

### Environment Variables
- \`GITHUB_TOKEN\`: GitHub personal access token for API access
      `.trim()
    });
  }

  private async writeDocumentation(): Promise<void> {
    const docContent = this.sections
      .map(section => section.content)
      .join('\n\n---\n\n');

    const docsDir = path.join(this.projectRoot, 'docs');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    const docPath = path.join(docsDir, 'DOCUMENTATION.md');
    fs.writeFileSync(docPath, docContent, 'utf-8');

    console.log(`📄 Documentation written to: ${docPath}`);
  }
}

// Main execution
async function main() {
  const projectRoot = process.cwd();
  const generator = new DocumentationGenerator(projectRoot);
  await generator.generate();
}

main().catch(error => {
  console.error('❌ Error generating documentation:', error);
  process.exit(1);
});
