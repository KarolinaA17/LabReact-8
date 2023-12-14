import React from "react";
import {
  SimpleGrid,
  Image,
  Text,
  Button,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
} from "@chakra-ui/react";

export default function Cards() {
  return (
    <SimpleGrid
      spacing={4}
      justifyContent="center"
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <Box boxShadow="0 0 20px rgba(0, 0, 0, 0.3)" borderRadius="lg">
        <Card>
          <CardHeader>
            <Image
              src="https://img.freepik.com/fotos-premium/hamburguesa-carne-res-jamon-queso-cebolla-caramelizada-tomates_157927-3395.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              boxSize="280px"
              objectFit="cover"
              mb="5"
            />
            <Heading
              size="md"
              fontFamily="Grenda"
              mt="10px"
              textAlign="center"
              fontSize="26px"
              mb="-5"
            >
              RUSTICA BBQ RANCHERA
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontFamily="Comfortaa" fontSize="16px" textAlign="justify">
              Una hamburguesa con un toque rústico, elaborada con carne de res a
              la parrilla, cebollas caramelizadas, queso cheddar y una generosa
              capa de salsa barbacoa estilo ranchero.
            </Text>
          </CardBody>
          <CardFooter textAlign="center" mt="-5">
            <Button mx="auto">View here</Button>
          </CardFooter>
        </Card>
      </Box>
      <Box boxShadow="0 0 20px rgba(0, 0, 0, 0.3)" borderRadius="lg">
        <Card>
          <CardHeader>
            <Image
              src="https://cdn2.cocinadelirante.com/sites/default/files/images/2018/07/receta-de-hamburguesa-vegetariana-de-quinoa-y-frijoles.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              boxSize="280px"
              objectFit="cover"
              mb="5"
            />
            <Heading
              size="md"
              fontFamily="Grenda"
              mt="10px"
              textAlign="center"
              fontSize="26px"
              mb="-5"
            >
              DELICIA VEGGIE FUSION
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontFamily="Comfortaa" fontSize="16px" textAlign="justify">
              Una opción para los amantes de las hamburguesas vegetarianas, con
              una mezcla deliciosa de quinoa, champiñones, y una cremosa salsa
              de aguacate.
            </Text>
          </CardBody>
          <CardFooter textAlign="center" mt="-5">
            <Button mx="auto">View here</Button>
          </CardFooter>
        </Card>
      </Box>
      <Box boxShadow="0 0 20px rgba(0, 0, 0, 0.3)" borderRadius="lg">
        <Card>
          <CardHeader>
            <Image
              src="https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              boxSize="280px"
              objectFit="cover"
              mb="5"
            />
            <Heading
              size="md"
              fontFamily="Grenda"
              mt="10px"
              textAlign="center"
              fontSize="26px"
              mb="-5"
            >
              EXPLOSION CARNIVORA
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontFamily="Comfortaa" fontSize="16px" textAlign="justify">
              Una hamburguesa cargada de sabores intensos, con una mezcla única
              de carne premium, queso ahumado y una explosión de salsa barbacoa.
            </Text>
          </CardBody>
          <CardFooter textAlign="center" mt="-5">
            <Button mx="auto">View here</Button>
          </CardFooter>
        </Card>
      </Box>
      <Box boxShadow="0 0 20px rgba(0, 0, 0, 0.3)" borderRadius="lg">
        <Card>
          <CardHeader>
            <Image
              src="https://i.pinimg.com/236x/ca/99/58/ca9958c408f854fdc928e1f6494f38a4.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              boxSize="280px"
              objectFit="cover"
              mb="5"
            />
            <Heading
              size="md"
              fontFamily="Grenda"
              mt="10px"
              textAlign="center"
              fontSize="26px"
              mb="-5"
            >
              CHEESE-SMILE BURGER
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontFamily="Comfortaa" fontSize="16px" textAlign="justify">
              Una divertida y deliciosa hamburguesa para los más pequeños. Con
              una mini carne de res, queso cheddar, ketchup y mostaza, todo en
              un panecillo suave. ¡Una experiencia sabrosa que hará sonreír a
              los niños!"
            </Text>
          </CardBody>
          <CardFooter textAlign="center" mt="-5">
            <Button mx="auto">View here</Button>
          </CardFooter>
        </Card>
      </Box>
    </SimpleGrid>
  );
}
