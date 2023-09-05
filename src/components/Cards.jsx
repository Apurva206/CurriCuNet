import React from 'react';
import Resources from './Resources';

const Cards = () => {
  const ResourcesData = [
    { id: 1, 
      title: 'Web Development',
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium? Cum, suscipit reiciendis pariatur, quaerat est dolorem magni!',
      btn:'Start Trial' },
    { id: 2,
      title: 'Digital Marketing',
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium? Cum, suscipit reiciendis pariatur, quaerat est dolorem magni!',
      btn:'Start'
     },
    { id: 3, 
      title: 'A', 
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium? Cum, suscipit reiciendis pariatur, quaerat est dolorem magni!',
      btn: 'Start' 
    },
    { id: 4, 
      title: 'W',
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium? Cum, suscipit reiciendis pariatur, quaerat est dolorem magni!',
      btn:'Start Trial' },
    { id: 5,
      title: 'Digital Marketing',
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium? Cum, suscipit reiciendis pariatur, quaerat est dolorem magni!',
      btn:'Start'
     },
    { id: 6, 
      title: 'App Development',
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium? Cum, suscipit reiciendis pariatur, quaerat est dolorem magni!',
      btn: 'Start' 
    },
  ];

  return (
    <div className='flex gap-3 flex-wrap md:grid grid-cols-3 gap-6'>
    {ResourcesData.map((item) => (
        <Resources   
         key={item.id}
         title={item.title}
         txt={item.txt}
        btn={item.btn}
        />
    ))}
  </div>
  );
};

export default Cards;