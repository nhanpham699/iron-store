/**
 * Homepage selectors
 */
import { useSelector } from "react-redux"

const username = useSelector((state: any) => state.user.username)

const loading = useSelector((state: any) => state.loading)

export { username, loading }
