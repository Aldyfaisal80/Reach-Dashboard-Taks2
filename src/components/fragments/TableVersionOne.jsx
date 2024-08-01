import TablesBadge from "../elements/dashboard/TablesBadge"

export default function TableVersionOne() {
    return (
        <TablesBadge>
            <TablesBadge.TablesHeadOne className={"bg-gray-800 text-white"} title="Name" />
            <TablesBadge.TablesHeadOne className={"bg-gray-800 text-white"} title="Last Name" />
            <TablesBadge.TablesHeadOne className={"bg-gray-800 text-white"} title="Phone" />
            <TablesBadge.TablesHeadOne className={"bg-gray-800 text-white"} title="Email" />
            <TablesBadge.TablesBodyOne className={"bg-gray-800 text-white"} firstName="Lian" lastName="Smith" phone="622322662" email="jonsmith@mail.com" />
            <TablesBadge.TablesBodyOne firstName="Emma" lastName="Johnson" phone="622322662" email="jonsmith@mail.com" />
            <TablesBadge.TablesBodyOne firstName="John" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
            <TablesBadge.TablesBodyOne firstName="Jane" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
            <TablesBadge.TablesBodyOne firstName="Mary" lastName="Doe" phone="622322662" email="jonsmith@mail.com" />
        </TablesBadge>
    )
}