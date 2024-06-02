import React from 'react'
import { Card, CardHeader, CardBody ,Heading, Stack, StackDivider, Box ,Text, Button} from '@chakra-ui/react'

const ProductCard = ({title,category,price}) => {

  return (
     
    
    <Card mt={4}>
      
    <CardHeader>
      <Heading color="blue.200" size='md'>Each Product</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          Title
          </Heading>
          <Text pt='2' fontSize='sm'>
             {title}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          Category
          </Heading>
          <Text pt='2' fontSize='sm'>
            {category}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          Price
          </Heading>
          <Text pt='2' fontSize='sm'>
             {price}
          </Text>
        </Box>
        <Button variant="outline" colorScheme='teal'>More Details</Button>
      </Stack>
    </CardBody>
  </Card>
     
  )
}

export default ProductCard
