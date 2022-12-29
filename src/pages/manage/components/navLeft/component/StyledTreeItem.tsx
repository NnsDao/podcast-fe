import { TreeItem, treeItemClasses, TreeItemProps } from '@mui/lab';
import { Box, styled, SvgIconProps, Typography } from '@mui/material';
import React from 'react';
type StyledTreeItemProps = TreeItemProps & {
  labelType: string;
  bgColor?: string;
  color?: string;
  labelIcon?: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText?: string;
  nodeId: String;
};
declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    // borderTopRightRadius: theme.spacing(2),
    // borderBottomRightRadius: theme.spacing(2),
    // paddingRight: theme.spacing(1),
    marginBottom: '8px',
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'inherit',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: 0,
    },
  },
}));
export default function StyledTreeItem(props: StyledTreeItemProps) {
  const { labelType, bgColor, color, labelIcon: LabelIcon, labelInfo, labelText, ...other } = props;

  const iconColor = () => {
    if (props.labelText === 'NFts' || props.labelText === 'Chat') {
      return '#F64E60';
    } else if (props.labelText === 'Budget' || props.labelText === 'NIP') {
      return '#1BC5BD';
    } else if (props.labelText === 'Suggestions') {
      return '#8950FC';
    } else {
      return 'inherit';
    }
  };
  return labelType == 'box' ? (
    <Box sx={{ fontWeight: 700, paddingY: '10px', paddingLeft: '8px' }}>{labelText}</Box>
  ) : (
    <StyledTreeItemRoot
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      label={
        <Box
          sx={{
            display: 'flex',
            direction: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 1,
            marginLeft: '-15px',
          }}
          style={{
            '--tree-view-color': color,
            '--tree-view-bg-color': bgColor,
          }}>
          <Box sx={{ display: 'flex', direction: 'row', justifyContent: 'start', alignItems: 'center' }}>
            <Box component={LabelIcon} color={iconColor} sx={{ mr: '5px' }} />
            {/* <Box component={LabelIcon} color={'inherit'} sx={{ mr: '5px' }} /> */}
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {labelText}
            </Typography>
          </Box>
          {labelInfo ? (
            <Box
              sx={{
                padding: '5px',
                background: '#D7F9EF',
                borderRadius: '4px',
                color: '',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '12px',
              }}>
              {labelInfo}
            </Box>
          ) : null}
        </Box>
      }
      {...other}
    />
  );
}
