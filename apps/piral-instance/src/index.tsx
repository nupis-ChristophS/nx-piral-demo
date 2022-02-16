import {renderInstance} from 'piral';
import {Layout} from "./app/layout";
import './polyfills';

renderInstance({
  layout: {Layout},
  requestPilets: () => Promise.resolve([]),
});
