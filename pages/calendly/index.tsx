import RyzolveHeader from 'components/ryzolve/RyzolveHeader';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

const index = () => {
  //   useCalendlyEventListener({
  //     onProfilePageViewed: () => console.log("onProfilePageViewed"),
  //     onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
  //     onEventTypeViewed: () => console.log("onEventTypeViewed"),
  //     onEventScheduled: (e) => console.log(e.data.payload),
  //   });
  return (
    <section className='bg-rezolve-calendly'>
      <header className='wrapper'>
        <RyzolveHeader />
      </header>
      <div>
        <InlineWidget url='https://calendly.com/ryzolve-pas-software/ryzolve-demo' />
      </div>
    </section>
  );
};

export default index;
