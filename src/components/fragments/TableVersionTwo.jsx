import TablesBadge from "../elements/dashboard/TablesBadge"
export default function TableVersionTwo() {
    return (
        <TablesBadge >
            <TablesBadge.TablesHeadOne title="Name" />
            <TablesBadge.TablesHeadOne title="Last Name" />
            <TablesBadge.TablesHeadOne title="Phone" />
            <TablesBadge.TablesHeadOne title="Email" />
            <TablesBadge.TablesBodyOne firstName="Lian" lastName="Smith" phone="622322662" email="jonsmith@mail.com" />
            <TablesBadge.TablesBodyOne firstName="Emma" lastName="Johnson" phone="622322662" email="jonsmith@mail.com" />
            <TablesBadge.TablesBodyOne firstName="John" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
            <TablesBadge.TablesBodyOne firstName="Jane" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
        </TablesBadge>
    )
}