import Divider from '@mui/material/Divider';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import stringOperations from '../../shared-components/stringOperations';

function InformeListItem(props) {
  const { informe } = props;
  return (
    <>
      <TableRow
        key={informe.id} 
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        component={NavLinkAdapter}
        to={`/informes/${informe.id}`}
      >
        <TableCell>
          {stringOperations.getLocaleDateTime(informe.fechareunion).toLocaleString()}
        </TableCell>
        <TableCell>{stringOperations.capitalizeFirst(informe.tema)}</TableCell>
        <TableCell>{informe.total_asistentes}</TableCell>
        <TableCell>{stringOperations.capitalizeFirst(informe.state)}</TableCell>
        <TableCell>&nbsp;</TableCell>
      </TableRow>
      <Divider />
    </>
  );
}

export default InformeListItem;
