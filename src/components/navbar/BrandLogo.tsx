import logoText from '../../assets/logo-text.png'

type BrandLogoProps = {
  className?: string
}

function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <a href="#" className={`flex items-center ${className}`}>
      <img src={logoText} alt="Dev Stack" className="h-9 w-auto" />
    </a>
  )
}

export default BrandLogo