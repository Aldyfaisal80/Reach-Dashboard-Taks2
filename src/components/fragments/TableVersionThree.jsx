import TablesBadge from "../elements/dashboard/TablesBadge"
export default function TableVersionOne() {
    return (
        <TablesBadge>
            <TablesBadge.TablesHeadTwo title="User" />
            <TablesBadge.TablesHeadTwo title="Rol" />
            <TablesBadge.TablesHeadTwo title="Created at" />
            <TablesBadge.TablesHeadTwo title="Status" />
            <TablesBadge.TablesBodyTwo img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" name="Vera Carpenter" rol="Admin" created="Jan 21, 2020" className="absolute inset-0 bg-green-200 opacity-50 rounded-full" status="Active" />
            <TablesBadge.TablesBodyTwo img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" name="Blake Bowman" rol="Editor" created="Jan 01, 2020" className="absolute inset-0 bg-green-200 opacity-50 rounded-full" status="Active" />
            <TablesBadge.TablesBodyTwo img="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" name="Dana Moore" rol="Editor" created="Jan 10, 2020" className="absolute inset-0 bg-orange-200 opacity-50 rounded-full" className2="text-orange-800" status="Suspended" />
            <TablesBadge.TablesBodyTwo img="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80" name="Alonzo Cox" rol="Admin" created="Jan 18, 2020" className="absolute inset-0 bg-red-200 opacity-50 rounded-full" className2="text-red-900" status="Inactive" />
        </TablesBadge>
    )
}