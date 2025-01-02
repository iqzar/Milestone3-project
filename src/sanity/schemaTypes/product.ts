export const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Product Title',
        type: 'string',
       
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping
        },
      
      },
      {
        name: 'detailDescription',
        title: 'Detail Description',
        type: 'text',
      
      },
      {
        name: 'color',
        title: 'Available Colors',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags', // Allows users to input colors as tags
        },
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
       
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
       
      },
      {
        name: 'discountPrice',
        title: 'Discount Price',
        type: 'number',
      
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(), // Automatically set the creation date
      },
    ],
  };
  