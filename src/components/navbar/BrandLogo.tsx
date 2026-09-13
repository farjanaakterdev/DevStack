import logoText from '../../assets/logo-text.png'

type BrandLogoProps = {
  className?: string
}

function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <a href="#" className={`flex items-center gap-2 ${className}`}>
      <img src="/favicon.svg" alt="Dev Stack logo" className="h-9 w-9" />
      <img src={logoText} alt="Dev Stack" className="h-9 w-auto" />
    </a>
  )
}

export default BrandLogo