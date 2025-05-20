import { ReferenceView } from 'src/sections/Reference/view';
import { Helmet } from 'react-helmet-async';

export default function ReferencePage() {
  return (
    <>
      <Helmet>
        <title>Reference</title>
      </Helmet>
      <ReferenceView />
    </>
  );
}
