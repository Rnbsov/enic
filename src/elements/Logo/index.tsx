import Image from 'next/image'

export const Logo = () => {
  return (
    <span style={{ position: 'relative', width: '256px', height: '60px', background: 'white', borderRadius: '10px' }}>
      <Image src="/enic.png" alt="" fill />
    </span>
  )
}

export const Icon = () => {
  return (
    <span style={{ position: 'relative', width: '50px', height: '50px', background: 'white', borderRadius: '10px' }}>
      <Image src="/favicon-32x32.png" alt="" fill />
    </span>
  )
}
