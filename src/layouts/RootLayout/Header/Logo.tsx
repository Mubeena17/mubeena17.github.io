import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <div className="wrapper">
        <div className="top">{CONFIG.blog.title}</div>
      </div>
    </StyledWrapper>
  )
}

export default Logo

//const StyledWrapper = styled(Link)``

const StyledWrapper = styled(Link)`
  font-size: 2.25rem;
  line-height: 1.75rem;
  font-style: italic;
  font-weight: 700;
`
