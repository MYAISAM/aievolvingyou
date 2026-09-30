export default function IllustrationSlot({ src, alt, className = '' }) {
  return <img className={`illustration-slot ${className}`} src={src} alt={alt} />
}
