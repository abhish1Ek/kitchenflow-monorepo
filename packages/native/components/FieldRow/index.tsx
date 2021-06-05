import React, { useMemo } from 'react';
import * as _ from 'lodash';
import { View } from 'react-native';

interface IFieldRow {
  children: React.ReactNodeArray | React.ReactNode;
  columns?: number;
}

const FieldRow: React.FC<IFieldRow> = props => {
  const { columns, children: nodes } = props;

  const children = useMemo(() => (Array.isArray(nodes) ? nodes : [nodes]), [
    nodes,
  ]);

  const chunk = useMemo(() => _.chunk(children, columns), [columns, children]);

  return (
    <>
      {chunk.map((arr, i) => (
        <View key={i} style={{ flexDirection: 'row', marginBottom: 10 }}>
          {arr.map((child, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                marginLeft: child == children[0] ? 0 : 2,
                marginRight: child == children[children.length - 1] ? 0 : 2,
              }}
            >
              {child}
            </View>
          ))}
        </View>
      ))}
    </>
  );
};

FieldRow.defaultProps = {
  columns: 1,
};

export default FieldRow;
