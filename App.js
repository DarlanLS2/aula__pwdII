import { StyleSheet, Text, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.temas}>Cargos:</Text>
      <Text style={styles.titulo}>Junior</Text>
      <Text style={styles.text}>
        Um desenvolvedor júnior é um profissional com pouca experiência na área, geralmente com até 2 anos de prática. Ele está começando a se familiarizar com as ferramentas e as tecnologias que utiliza, e ainda está aprendendo as boas práticas de desenvolvimento e a lidar com problemas mais complexos. Normalmente, o dev júnior precisa de bastante supervisão e orientação de colegas mais experientes, realizando tarefas mais simples e partes menores de um projeto. A principal expectativa é que ele tenha curiosidade e vontade de aprender, já que está em uma fase de adaptação e desenvolvimento de suas habilidades.
      </Text>
      <Image style={styles.img} source={require('./assets/imagem__junior.jpg')}></Image>
      <Text style={styles.titulo}>Senior</Text>
      <Text style={styles.text}>
      Já um desenvolvedor pleno tem entre 2 e 5 anos de experiência e, nesse estágio, ele já possui uma boa compreensão das tecnologias que utiliza e das práticas de desenvolvimento. Um dev pleno tem mais autonomia para resolver problemas de complexidade média, sem a necessidade de tanta supervisão. Ele é capaz de trabalhar de forma mais independente, podendo até tomar decisões técnicas sozinho. Além disso, tem a responsabilidade de entregar partes mais significativas de projetos e pode revisar o trabalho de desenvolvedores mais juniores, orientando-os quando necessário. Espera-se que o dev pleno tenha um bom equilíbrio entre habilidades técnicas e a capacidade de trabalhar bem em equipe.
      </Text>
      <Image  style={styles.img} source={require('./assets/imagem__senior.jpg')}></Image>
      <Text style={styles.titulo}>Pleno</Text>
      <Text style={styles.text}>
      Por fim, um desenvolvedor sênior é um profissional com mais de 5 anos de experiência, geralmente mais de 7 ou 8. Ele tem um conhecimento profundo de várias tecnologias e uma grande capacidade de resolver problemas complexos de forma independente. O dev sênior não só executa tarefas técnicas desafiadoras, mas também tem responsabilidades de liderança, orientando outros desenvolvedores, ajudando na definição de arquiteturas de sistemas e tomando decisões técnicas importantes. Ele costuma ter uma visão mais ampla do projeto e da empresa, sendo alguém que pode influenciar diretamente o direcionamento das soluções e a qualidade do código produzido. O dev sênior é visto como um líder técnico e espera-se que ele também contribua para a melhoria contínua da equipe e dos processos.
      </Text>
      <Image  style={styles.img} source={require('./assets/imagem__pleno.jpg')}></Image>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    padding: 15,
  },
  temas: {
    alignSelf: "center",
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 300,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 15,
  },
  img: {
    width: "auto",
    height: 220,
    marginBottom: 30
  },
});
