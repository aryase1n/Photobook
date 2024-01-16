export const categories = [
  {
    name: 'anime',
    image: 'https://thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?x13751',
  },
  {
    name: 'photo',
    image: 'https://img.freepik.com/premium-photo/cute-couple-love-with-hearts-valentine-s-day-card-3d-render-illustration_691560-7418.jpg?w=740',
  },
  {
    name: 'nature',
    image: 'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=1060&t=st=1705411831~exp=1705412431~hmac=1429a4e57f04ffe85cd7d59b41f599bd5c53b067879579f8cbc1f38a346b76ed',
  },
  {
    name: 'art',
    image: 'https://img.freepik.com/free-photo/people-sitting-bench-forest-night-generative-ai_260559-472.jpg?w=360&t=st=1705411760~exp=1705412360~hmac=34d38761da03f2109d1b451b61407e2c8f6bcfaedce7275e704f236ccf78bda8',
  },
  {
    name: 'food',
    image: 'https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=740&t=st=1705411974~exp=1705412574~hmac=b9c71657b09c76b27645c4f02a5ca1273c992dae04bc955af32692004983de9f',
  },
  {
    name: 'cats',
    image: 'https://img.freepik.com/free-photo/close-up-kitten-surrounded-by-flowers_23-2150782329.jpg?t=st=1705411998~exp=1705415598~hmac=4bf71c3a6744b906f8807ba6f48a2436cf02143432659fb491f61d23541a5a13&w=360',
  },
  {
    name: 'dogs',
    image: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-2_1562-691.jpg?w=1060&t=st=1705412031~exp=1705412631~hmac=1b09278f5fcfb5abc2ce9cdf2c81ca8e6d13d05aff86e5e4a97e2ffba8830d3d',
  },
  {
    name: 'quotes',
    image: 'https://img.freepik.com/free-vector/inspirational-quote-watercolour-background_1048-18831.jpg?w=740&t=st=1705412064~exp=1705412664~hmac=4c36b6e1d33215c2f09212effa3b28cb312f8bd8b3b21404e2544e3d3d7682f9',
  }, {
    name: 'travel',
    image: 'https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?w=1060&t=st=1705412446~exp=1705413046~hmac=5fd9560e6df47e23c145bda718555ffc81b38f04ed90e02734fb3d463a734e45',
  },
  {
    name: 'fashion',
    image: 'https://img.freepik.com/free-photo/view-hawaiian-shirt-with-floral-print-hanger_23-2149366088.jpg?w=1060&t=st=1705412111~exp=1705412711~hmac=4b4c4fd935fb73c3a04d7dedff21c45741f020f75806abde4e7cbb3510434226',
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};
