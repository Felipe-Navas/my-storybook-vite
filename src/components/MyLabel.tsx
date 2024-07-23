import './MyLabel.css'

interface Props {
  /**
   * Text to be displayed
   */
  label: string

  /**
   * Size of the label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'

  /**
   * Whether the label should be all caps
   */
  allCaps?: boolean

  /**
   * Color of the label
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

  /**
   * Font color of the label
   */
  fontColor?: string

  /**
   * Background color of the label
   */
  backgroundColor?: string
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color = 'text-primary',
  fontColor,
  backgroundColor = 'transparent',
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
