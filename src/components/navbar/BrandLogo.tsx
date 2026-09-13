type BrandLogoProps = {
  className?: string
}

function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <a href="#" className={`flex items-center gap-2 ${className}`}>
      <img src="/favicon.svg" alt="Dev Stack logo" className="h-9 w-9" />
      <span className="text-lg font-bold tracking-tight text-gray-900">
        Dev<span className="text-gradient-brand font-normal">Stack</span>
      </span>
    </a>
  )
}

export default BrandLogo