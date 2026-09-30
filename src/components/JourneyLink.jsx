import { Link, useLocation } from 'react-router-dom'
import { journeyLinkState } from '../pages/journeyNavigation'

export default function JourneyLink({ to, ...props }) {
  const location = useLocation()
  return <Link {...props} to={to} state={journeyLinkState(location, to)} />
}
