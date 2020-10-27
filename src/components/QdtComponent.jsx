import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  qdtEnigma, qdtCapabilityApp, qdtCompose, QdtViz,
} from 'qdt-components';

const identity = Math.random().toString(32).substr(2, 8);

const config = {
  host: 'sense-demo.qlik.com',
  secure: true,
  port: 443,
  prefix: '',
  appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',
  identity,
};

const engineApiAppPromise = qdtEnigma(config);
const capabilityApiAppPromise = qdtCapabilityApp(config);

function QdtComponent({
  component, properties, options, appIndex,
}) {
  const elementRef = useRef(null);

  const init = async () => {
    let app = await engineApiAppPromise;
    if (appIndex === 2) {
      app = await capabilityApiAppPromise;
      QdtViz({
        element: elementRef.current,
        app,
        options,
      });
    } else {
      qdtCompose({
        element: elementRef.current,
        component,
        app,
        properties,
        options,
      });
    }
  };

  useEffect(() => {
    if (elementRef) init();
  }, [init]);

  return (
    <div ref={elementRef} />
  );
}

QdtComponent.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
  properties: PropTypes.object,
  options: PropTypes.object,
  appIndex: PropTypes.number,
};
QdtComponent.defaultProps = {
  component: null,
  properties: {},
  options: {},
  appIndex: 1,
};

export default QdtComponent;
