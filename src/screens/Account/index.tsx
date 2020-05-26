import React, { useState } from 'react';
import { View } from 'react-native';

import Hide from "../../components/AccountComponents/Hide";
import Account from "../../components/AccountComponents/Account";


const AccountScreen = ({}) => {
    const [formView, setFormView] = useState<boolean>(false);
    return (
      <View style={{ flex: 1 }}>
          {formView ? (
            <Hide switchView={setFormView} />
          ) : (
            <Account switchView={setFormView} />
          )}
  
      </View>
    );
  };

export default AccountScreen;