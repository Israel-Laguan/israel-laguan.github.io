import fullpage from 'fullpage.js';
import './loaders'

new fullpage('#fullpage', {
  licenseKey: 'none',
  // Navigation
  lockAnchors: false,
	anchors:['start', 'my-history', 'my-skills', 'reach-me'],
	navigation: true,
	navigationTooltips: ['\tStart', '\tMore about my past','\tWhat I can do', '\tContact Me'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',
  sectionsColor: ['#00263d', 'orange', 'blue', '#ADD8E6'],
});
