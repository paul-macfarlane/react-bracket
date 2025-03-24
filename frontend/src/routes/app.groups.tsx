import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/groups')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/groups"!</div>
}
