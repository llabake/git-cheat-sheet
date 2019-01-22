export default {
  'install git': [
    {
      header: 'Install Homebrew',
      description: 'Install git on macOS with Homebrew',
      commands: ['brew install git'],
      keywords: ['install', 'macos', 'homebrew'],
    },
    {
      header: 'Install Linux',
      description: 'Install git on Debian-based linux',
      commands: ['sudo apt-get install git'],
      keywords: ['install', 'apt-get', 'debian', 'linux'],
    },
    {
      header: 'Install Windows',
      description: 'Install git on Windows with Chocolatey',
      commands: ['choco install git'],
      keywords: ['install', 'windows', 'choco'],
    }],
  configuration: [
    {
      header: 'Configure user name',
      commands: ['git config --global user.name [name]'],
      description: 'Sets the name you want attached to your commit transaction',
      keywords: ['configuration', 'name', 'email', 'user'],
    },
    {
      header: 'Configure user email',
      commands: ['git config --global user.email [email address]'],
      description: 'Sets the email you want atached to your commit transactions',
      keywords: ['configuration', 'name', 'email', 'user'],
    },
    {
      header: 'Configure terminal color',
      commands: ['git config --global color.ui auto'],
      description: 'Enables helpful colorization of commands line output',
      keywords: ['configuration', 'color', 'ui', 'customization'],
    }],
  'create repo': [
    {
      header: 'Create local repo',
      commands: ['git init [project-name]'],
      description: 'Creates a new local repository with the specified name',
      keywords: ['new', 'project', 'create'],
    },
    {
      header: 'Clone a repo',
      commands: ['git clone [url]'],
      description: 'Downloads a project and its entire version history',
      keywords: ['download', 'remote', 'clone', 'checkout'],
    }],
  'make changes': [
    {
      header: 'Track file changes',
      commands: ['git status'],
      description: 'Lists all new or modified files to be commited',
      keywords: ['change', 'modifications', 'commit'],
    },
    {
      header: 'View changes',
      commands: ['git diff'],
      description: 'Shows file differences not yet staged',
      keywords: ['modifications', 'changes', 'diff'],
    },
    {
      header: 'Stage a file',
      commands: ['git add [file]'],
      description: 'Add the specified file to the staging area',
      keywords: [],
    },
    {
      header: 'View staged file changes',
      commands: ['git diff --staged'],
      description: 'Shows file differences between staging and the last file version',
      keywords: ['modifications'],
    },
    {
      header: 'Reset file changes',
      commands: ['git reset [file]'],
      description: 'Unstages the file, but preserve its contents',
      keywords: [],
    },
    {
      header: 'Commit file with message',
      commands: ['git commit -m [descriptive message]'],
      description: 'Records staged snapshots in version history',
      keywords: [],
    },
    {
      header: 'Undo commits',
      commands: ['git reset [commit]'],
      description: 'Undoes all commits afer [commit], preserving changes locally',
      keywords: [],
    },
    {
      header: 'Discard changes',
      commands: ['git reset --hard [commit]'],
      description: 'Discards all history and changes back to the specified commit',
      keywords: [],
    },
    {
      header: 'Discard changes',
      commands: ['git reset –hard HEAD'],
      description: 'Discards all local changes in the working directory',
      keywords: [],
    }],
  branches: [
    {
      header: 'List branches',
      commands: ['git branch'],
      description: 'Lists all local branches in the current repository',
      keywords: [],
    },
    {
      header: 'Create branch',
      commands: [
        'git branch [branch-name]',
        'git push origin $branchname --set-upstream',
      ],
      description: 'Creates a branch',
      keywords: [],
    },
    {
      header: 'Merge branch',
      commands: ['git merge [branch-name]'],
      description: 'Merges the specified branch’s history into the current branch',
      keywords: [],
    },
    {
      header: 'Switch branch',
      commands: ['git checkout [branch-name]'],
      description: 'Switches to the specified branch',
      keywords: [],
    },
    {
      header: 'Create and switch branch',
      commands: ['git checkout -b [branch-name]'],
      description: 'Creates a branch and switch to it',
      keywords: [],
    },
    {
      header: 'Renaming branch',
      commands: ['git checkout -m [new-branch-name]'],
      description: 'Rename a branch',
      keywords: [],
    },
    {
      header: 'Deleting branch',
      commands: ['git branch -d [branch-name]'],
      description: 'Deletes the specified branch, locally',
      keywords: [],
    }],
  stashing: [
    {
      header: 'Restore stashed changes',
      commands: ['git stash pop'],
      description: 'Restores the most last stashed files and deletes the stashed changeset',
      keywords: [],
    },
    {
      header: 'Stash changes',
      commands: ['git stash'],
      description: 'Temporarily stores all modified tracked files',
      keywords: [],
    },
    {
      header: 'List stashed',
      commands: ['git stash list'],
      description: 'Lists all stashed changesets',
      keywords: [],
    },
    {
      header: 'Delete stash',
      commands: ['git stash drop'],
      description: 'Deletes the last stashed changeset',
      keywords: [],
    }],
  synchronize: [
    {
      header: 'Sync local changes with remote',
      commands: ['git push [alias] [branch]'],
      description: 'Pushes all local changesets to the remote repository',
      keywords: [],
    },
    {
      header: 'Fetch and apply remote changes',
      commands: ['git pull'],
      description: 'Downloads new remote history and incorporate changes',
      keywords: [],
    },
    {
      header: 'View remote repo name',
      commands: ['git remote -v'],
      description: 'Shows the name of remote repositories',
      keywords: [],
    },
    {
      header: 'Fetch remote changes',
      commands: ['git fetch'],
      description: 'Get the latest changes from the origin but not merge',
      keywords: [],
    },
    {
      header: 'Remove repo',
      commands: ['git remote rm [remote repo name]'],
      description: 'Removes the remote repository',
      keywords: [],
    }],
  tagging: [
    {
      header: 'List tags',
      commands: ['git tag'],
      description: 'Lists all tags',
      keywords: ['tag', 'version', 'release'],
    },
    {
      header: 'List tags',
      commands: ['git tag -l "[pattern]"'],
      description: 'Lists tags with specified pattern',
      keywords: ['tag', 'version', 'release', 'pattern'],
    },
    {
      header: 'Create tag',
      commands: ['git tag -a [version] -m [message]', 'git release v1.0.0'],
      description: 'Create annotated tag',
      keywords: ['tag', 'version', 'release', 'annotate'],
    },
    {
      header: 'Create tag',
      commands: ['git tag [version]'],
      description: 'Create a lightweight tag',
      keywords: ['tag', 'version', 'release', 'lightweight'],
    },
    {
      header: 'Create tag',
      commands: ['git tag -a [version] [commit]'],
      description: 'Tagging a commit',
      keywords: ['tag', 'version', 'release', 'later'],
    },
    {
      header: 'Share tag',
      commands: ['git push [alias] [version]'],
      description: 'Sharing a tag',
      keywords: ['tag', 'version', 'release', 'later'],
    },
    {
      header: 'Checkout tags',
      commands: ['git checkout [version]'],
      description: 'Checkout tags',
      keywords: ['tag', 'version', 'release'],
    },
    {
      header: 'Amend tag',
      commands: ['git commit --amend'],
      description: 'Change the commit message',
      keywords: ['undo', 'message', 'commit'],
    }],
  'moving & removing files': [
    {
      header: 'Removing file',
      commands: ['git rm [file]'],
      description: 'Deletes the file from the working directory and stages the deletion',
      keywords: [],
    },
    {
      header: 'Disable version control for file',
      commands: ['git rm --cached [file]'],
      description: 'Removes the file from version control but preserves the file locally',
      keywords: [],
    },
    {
      header: 'Renaming file',
      commands: ['git mv [from] [to]'],
      description: 'Renames the file',
      keywords: [],
    }],
  'history & diff': [
    {
      header: 'View history log',
      commands: [
        'git log',
        'git log --oneline',
        'git log --decorate',
        'git log --graph',
        'git log --date=relative',
        'git shortlog',
        'git shortlog HEAD~20',
      ],
      description: 'Lists version history for the current branch',
      keywords: [],
    },
    {
      header: 'View file history log',
      commands: ['git log --follow [file]'],
      description: 'Lists version history for a file, including renames',
      keywords: [],
    },
    {
      header: 'Show branch diff',
      commands: [
        'git diff [first-branch]...[second-branch]',
        'git diff [first-branch]...[second-branch] --stat',
        'git diff [first-branch]...[second-branch] --summary',
      ],
      description: 'Shows content differences between two branches',
      keywords: [],
    },
    {
      header: 'View commit changes',
      commands: ['git show [commit]'],
      description: 'Shows changes of the specified commit',
      keywords: [],
    }],
};
