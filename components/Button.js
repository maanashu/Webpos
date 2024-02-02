import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export function Button({ style, textStyle, title, pending, disable, ...rest }) {
  return pending ? (
    <TouchableOpacity
      disabled={disable}
      style={[styles.button, { borderColor: "#212121" }, style]}
      {...rest}
    >
      <ActivityIndicator color={"#275AFF"} />
      <Text
        style={[
          { color: "#626262", fontSize: 16, fontWeight: "700" },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.5}
      underlayColor="#0E86D4"
      style={[styles.button, { borderColor: "#212121" }, style]}
      {...rest}
    >
      <Text
        style={[
          { color: "#626262", fontSize: 16, fontWeight: "700" },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object || PropTypes.array,
  textStyle: PropTypes.object || PropTypes.array,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 330,
    backgroundColor: "#F5F6F7",
  },
});
