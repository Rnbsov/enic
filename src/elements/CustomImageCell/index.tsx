import Image from 'next/image'
import { type DefaultServerCellComponentProps } from 'payload'

const CustomImageCell = async ({ cellData, payload }: DefaultServerCellComponentProps) => {
  // thanks to Jarrod for the following simplification, payload
  // is already available in the props so no need to load config
  // and get payload again

  if (!cellData) {
    return
  }

  const media = await payload.findByID({
    collection: 'media',
    id: cellData,
  })

  return (
    <div
      style={{
        position: 'relative',
        width: '80px',
        height: '80px',
      }}
    >
      <Image
        src={media.url!}
        alt={media.alt || ''}
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  )
}

export default CustomImageCell
