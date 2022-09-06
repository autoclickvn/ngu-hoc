import { cloneElement, memo } from "react"

const ArPr: React.FC = () => {
  return <div>1</div>
}

const CloneElement = () => {
  const b = cloneElement(<ArPr />)

  return b

  return (
    <div>Clone Element</div>
  )
}

export default memo(CloneElement)