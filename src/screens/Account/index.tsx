import React, { FC } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.tertiary,
  },
});

const CustomImage = styled.Image`
  height: ${hp("50%")};
  width: ${wp("50%")};
  margin-top: ${hp("7%")};
  left: ${wp("25%")};
  border-radius: ${hp("20%")};
`;

const Name = styled.Text`
  text-align: center;
  margin-top: ${hp("4%")};
  font-weight: bold;
  color: ${Colors.white};
  font-size: ${hp("4%")};
`;

const Description = styled.Text`
  text-align: justify;
  width: ${wp("80%")};
  margin-top: ${hp("2%")};
  left: ${wp("10%")};
  font-size: ${hp("2.5%")};
  margin-bottom: ${hp("2%")};
`;

interface IAccountProps {}

const Account: FC<IAccountProps> = (props) => {
  return (
    <ScrollView style={styles.Container}>
      <CustomImage source={require("../../assets/FirstUser.png")} />
      <Name>Barbara Kwiatkowska</Name>
      <Description>
        Barbara Kwiatkowska - biotechnolog, ekspertka w dziedzinie pielęgnacji
        skóry (UMCS w Lublinie, praktyki w University of Miami Cosmetic Center).
        Konsultant w firmach kosmetycznych (Biochemia Urody) oraz
        farmaceutycznych (GloxoSmithKline). Od lat doradza milionom Polek na
        forach internetowych (wizaz.pl i gazeta.pl) oraz w prasie kobiecej
        ("Uroda" i "Wysokie Obcasy").
      </Description>
      <CustomImage source={require("../../assets/SecondUser.png")} />
      <Name>Gillbro Johanna</Name>
      <Description>
        Johanna Gillbro, doświadczona dermatolożka, podpowiada, jak skutecznie
        dobrać produkty do pielęgnacji twojej skóry, aby osiągnąć najlepsze
        efekty – nie dając się nabrać na reklamowe slogany i nie wydając majątku
        na kolejne maści, kremy i toniki.
      </Description>
      <CustomImage source={require("../../assets/ThirdUser.png")} />
      <Name>Grigore Adina</Name>
      <Description>
        Adina Grigore – uczy jak dbać o swoją skórę, na jakie produkty
        żywieniowe należy uważać, żeby dłużej cieszyć się piękną skórą i jak
        rozwiązać problemy dermatologiczne nierozwiązywalne dla wielu lekarzy.
        Podczas codziennej pielęgnacji stosujemy średnio ok. 12 produktów
        kosmetycznych. Wierzymy, że w ten sposób zapewnimy skórze zdrowie i
        naturalny wygląd – autorka uczy jak zastąpić szkodliwe produkty
        promowane przez przemysł kosmetyczny naturalnymi (EKO) oraz cieszyć się
        z bycia „saute”. Szczęśliwa skóra to prosty i w 100% naturalny program,
        który oczyszcza, uspokaja i uszczęśliwia skórę.
      </Description>
    </ScrollView>
  );
};

export default Account;
