import renderSection1 from './sections/section1';
import renderSection2 from './sections/section2';
import renderSection4 from './sections/section4';
import renderSection3 from './sections/section3';
import renderPortfolioSection from './sections/portfolioSection';
import renderSection6 from './sections/section6';
import React from 'react';
import PropTypes from 'prop-types';
// import cn from 'classnames';


// import styles from './cssmodules/index.module.scss'

function PortfolioIndex(props) {
  return (
    <main
      // className={cn(StyleSheet.main, props.className, 'untitled-page')}
      // style={{ '--src': `url(${'/assets/bef8f25107b627dd95d637540901c772.png'})` }}
    >
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderPortfolioSection(props)}
      {renderSection6(props)}
    </main>
  );
}

// PortfolioIndex.propTypes = {
//   className: PropTypes.string
// };

export default PortfolioIndex;
