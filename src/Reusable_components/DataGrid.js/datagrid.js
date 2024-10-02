import React from 'react';
import { DataGrid } from '@mui/x-data-grid';



const GenericDataGrid = ({ communicationProps, appearanceProps }) => {
  const { appCommunication, callbacks } = communicationProps;
  const { data, GradingColumns,Id } = appCommunication;

  // Gracefully handle missing data or GradingColumns
  if (!data || !GradingColumns) {
    return <div>No data available</div>;
  }

  return (
    <div
      style={{
        height: appearanceProps.height || 400,
        width: appearanceProps.width || '80%',
        marginLeft: appearanceProps.marginLeft || '50px',
        marginTop: appearanceProps.marginTop || '50px',
      }}
    >
      <DataGrid
        rows={data}
        columns={GradingColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => {
          console.log(`Getting ID for field "${Id}":`, row[Id]); // Debugging log
          return row[Id];  // Return the dynamic ID
        }}
        onRowClick={(params) => {
          const rowIdValue = params.row[Id];  // Dynamically access the Id field
          console.log(`Clicked row ID (${Id}):`, rowIdValue);  // Log the Id for debugging
          
          // If there's a callback, invoke it with the row data
          // if (callbacks.handleSetData) {
          //   callbacks.handleSetData(params.row);
          // }
        }}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: appearanceProps.backgroundColor || '#1976d2',
            height: appearanceProps.height || 56,
            width: appearanceProps.width || '100%',
            color: appearanceProps.color || '#fff',
          },
        }}
      />
    </div>
  );
};


export default GenericDataGrid;
