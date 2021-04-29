import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'น้องจูน',
    image:
      'https://www.techxcite.com/topics/37160/filemanager/A7_03119.jpg',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm2',
    title: 'น้องริว',
    image:
      'https://mpics.mgronline.com/pics/Images/563000000541202.JPEG',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm3',
    title: 'น้องชุ',
    image:
      'https://s359.kapook.com/pagebuilder/588db1f6-f5c1-428e-bef6-f68ea55b43c4.jpg',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm4',
    title: 'น้องกิ่ง',
    image:
      'https://s359.kapook.com/pagebuilder/3d395ae7-0d5b-4ca9-aee8-b3c0c06726e7.jpg',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm5',
    title: 'น้องปัท',
    image:
      'https://www.motorexpo.co.th/data/content/1240_2015121020103994.jpg',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm6',
    title: 'น้องแบม',
    image:
      'https://www.motorexpo.co.th/data/content/1240_2016121013103044.jpg',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm7',
    title: 'น้องนีน่า',
    image:
      'https://s359.kapook.com/pagebuilder/c92c1d1c-a6bf-4a22-a44b-e67a53a6adbe.jpg',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm8',
    title: 'น้องเขย',
    image:
      'https://assets.thaicarlover.com/wp-content/uploads/2016/08/Big-Motor-Sale-2016-3.jpg',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm9',
    title: 'น้องมีตัง',
    image:
      'https://www.checkraka.com/uploaded/article/expo/11593/IMG_7037.jpg',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
  {
    id: 'm10',
    title: 'น้องสาว',
    image:
      'https://mpics.mgronline.com/pics/Images/564000003003803.JPEG',
    address: '3000 / คืน',
    description: 'สวย แช่บ มีระดับ',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;
