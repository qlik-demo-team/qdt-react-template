import React from 'react';
import {
  QdtSelections, QdtSelect, QdtPicasso, useBarChartSettings,
} from 'qdt-components';
import QdtComponent from '../components/QdtComponent';

const styles = {
  row: {
    paddingBottom: 50,
  },
};

const Container = () => (
  <div className="container">

    <div style={styles.row}>
      <QdtComponent
        component={QdtSelections}
        properties={{
          qSelectionObjectDef: {},
        }}
      />
    </div>

    <div style={styles.row}>
      <QdtComponent
        component={QdtSelect}
        options={{ multiple: false }}
        properties={{
          qListObjectDef: {
            qDef: {
              qFieldDefs: ['Date'],
            },
            qInitialDataFetch: [{
              qWidth: 1,
              qHeight: 1000,
            }],
          },
        }}
      />
    </div>

    <div style={styles.row}>
      <QdtComponent
        component={QdtPicasso}
        options={{
          settings: useBarChartSettings({
            orientation: 'horizontal',
            // box: { properties: { brush: null } },
          }),
          height: 400,
        }}
        properties={{
          qHyperCubeDef: {
            qDimensions: [
              { qDef: { qFieldDefs: ['Case Owner Group'] } },
            ],
            qMeasures: [
              { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 } },
            ],
            qInterColumnSortOrder: [1, 0],
          },
        }}
      />
    </div>

    <div style={styles.row}>
      <QdtComponent
        options={{
          id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
          height: 400,
        }}
        appIndex={2}
      />
    </div>

  </div>
);

export default Container;
