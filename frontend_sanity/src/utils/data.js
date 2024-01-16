export const categories = [
  {
    name: 'anime',
    image: 'https://thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg',
  },
  {
    name: 'photo',
    image: 'https://img.freepik.com/premium-photo/cute-couple-love-with-hearts-valentine-s-day-card-3d-render-illustration_691560-7418.jpg',
  },
  {
    name: 'nature',
    image: 'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg',
  },
  {
    name: 'art',
    image: 'https://img.freepik.com/free-photo/people-sitting-bench-forest-night-generative-ai_260559-472.jpg',
  },
  {
    name: 'food',
    image: 'https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg',
  },
  {
    name: 'cats',
    image: 'https://img.freepik.com/free-photo/close-up-kitten-surrounded-by-flowers_23-2150782329.jpg',
  },
  {
    name: 'dogs',
    image: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-2_1562-691.jpg',
  },
  {
    name: 'quotes',
    image: 'https://img.freepik.com/free-vector/inspirational-quote-watercolour-background_1048-18831.jpg',
  }, {
    name: 'travel',
    image: 'https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg',
  },
  {
    name: 'fashion',
    image: 'https://img.freepik.com/free-photo/view-hawaiian-shirt-with-floral-print-hanger_23-2149366088.jpg',
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
