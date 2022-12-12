interface Props {
  languageType: string;
  languageColor: string;
}

const GitHubLanguageButton = ({ languageType, languageColor }: Props) => {
  return (
    <span className='hidden md:flex items-center justify-center p-1 dark:bg-secondary-700/50 bg-primary-200/40 mr-4 rounded-sm transition-all duration-300'>
      <i className={`devicon-${languageType.toLowerCase()}-plain colored`} />
    </span>
  )
}

export default GitHubLanguageButton;
