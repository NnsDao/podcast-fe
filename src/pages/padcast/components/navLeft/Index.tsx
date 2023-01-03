import { TreeView } from '@mui/lab';
import { Paper } from '@mui/material';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import StyledTreeItem from './component/StyledTreeItem';
import { config } from './config';

export default function NavLeft() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    let nodeID = config.find(item => new RegExp(item.labelText, 'i').test(pathname))?.nodeId || '1';
    setSelected(nodeID);
  }, [pathname]);
  const [selected, setSelected] = React.useState(() => {
    return config.find(item => new RegExp(item.labelText, 'i').test(pathname))?.nodeId || '1';
  });
  const toChildren = item => {
    if (/issue/i.test(item.labelText)) {
      return toast('Under Development!', {
        icon: '🛠 ',
      });
    }
    navigate(`${item.labelText}`);
  };
  return (
    <Paper sx={{ background: '#fff', position: 'sticky', top: '10px', padding: '8px' }}>
      <TreeView
        selected={selected}
        onNodeSelect={(e, id) => setSelected(id)}
        defaultCollapseIcon={false}
        sx={{ flexGrow: 1, width: '100%', overflowY: 'auto' }}>
        {config.map((item, index) => (
          <StyledTreeItem
            key={item.labelText}
            labelType={item.labelType}
            nodeId={item.nodeId}
            labelText={item.labelText}
            labelIcon={item.labelIcon}
            labelInfo={item.labelInfo}
            color={item.color}
            bgColor={item.bgColor}
            onClick={() => toChildren(item)}
          />
        ))}
      </TreeView>
    </Paper>
  );
}
