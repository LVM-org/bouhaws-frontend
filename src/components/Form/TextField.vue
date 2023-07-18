<template>
  <div class="flex w-full flex-col relative">
    <TypoNormalText v-if="hasTitle" customClass="!pb-2">
      <slot name="title" />
    </TypoNormalText>
    
    <div
      class="w-full flex flex-row items-center"
      :tabindex="tabIndex"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
      <slot name="outer-prefix" />
      <div
        :class="`flew-grow w-full space-x-1 flex-row flex items-center justify-between lg:text-sm mdlg:text-[12px] text-xs  ${padding} ${customClass}  bg-grey100 rounded ${
          isFocused ? 'border-primaryColor ' : ''
        } ${validationStatus == false ? '!border-red !border-[1px]' : ''}`"
      >
        <span>
          <slot name="inner-prefix" />
        </span>
        <input
          v-model="content"
          :placeholder="placeholder"
          @focus="isFocused = true"
          @blur="
            isFocused = false;
            checkValidation();
          "
          @keypress="isNumber"
          :disabled="disabled"
          :autofocus="autoFocus"
          :type="fieldType"
          :class="` text-bodyDark flex-grow bg-transparent !font-light placeholder-[#61656D] focus input w-full focus:outline-none lg:text-sm mdlg:text-[12px] text-xs `"
        />
        <slot name="inner-suffix" />
        <IconLoader
          class="!cursor-pointer"
          :name="`${fieldType == 'password' ? 'eye-open' : 'eye-close'}`"
          :customClass="`${fieldType == 'password' ? 'h-[15px]' : 'h-[15px]'} `"
          v-if="type == 'password'"
          @click.stop="
            fieldType == 'password'
              ? (fieldType = 'text')
              : (fieldType = 'password')
          "
        />
      </div>
      <slot name="outer-suffix" />
    </div>
    <div
      v-if="!validationStatus"
      class="w-full flex flex-row pt-1 justify-start"
    >
      <TypoNormalText :customClass="' text-left'" :color="`text-red`">
        {{ errorMessage }}
      </TypoNormalText>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue";


export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader},
  props: {
    padding: {
      type: String,
      default: "py-3 px-3",
    },
    placeholder: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "",
    },
    hasTitle: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Object as () => any[],
      required: false,
    },
    modelValue: {
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    updateValue: {
      type: String,
      default: "",
    },
    isFormatted: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props: any, context: any) {
    const content = ref("");

    const fieldType = ref("text");

    watch(content, () => {
      context.emit("update:modelValue", content.value);
      setTimeout(() => {
        checkValidation();
      }, 500);
    });

    onMounted(() => {
      if (props.modelValue) {
        content.value = props.modelValue;
      }
      if (props.type) {
        fieldType.value = props.type;
      }
      if (props.isFormatted) {
        //   content.value = Logic.Common.convertToMoney(
        //     content.value ? content.value.toString().replace(/,/g, "") : 0,
        //     false,
        //     "",
        //     false
        //   );
      }
    });
    const validationStatus = ref(true);
    const errorMessage = ref("");

    const isRequired = () => {
      if (content.value) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} is required`;
      }
    };

    const isGreaterThan = (count: number) => {
      if (content.value.length > count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be more than ${count} characters`;
      }
    };

    const isLessThan = (count: number) => {
      if (content.value.length < count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be less than ${count} characters`;
      }
    };

    const isEqualsTo = (count: number) => {
      if (content.value.length == count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be ${count} characters`;
      }
    };

    const isCondition = (condition: any, errMsg: string) => {
      if (condition) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = errMsg;
      }
    };

    const isGreaterThanOrEqualsTo = (count: number) => {
      if (content.value.length >= count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be more than ${
          count - 1
        } characters`;
      }
    };

    const isLessThanOrEqualsTo = (count: number) => {
      if (content.value.length <= count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be less than ${
          count + 1
        } characters`;
      }
    };

    const isRegex = (regex: any, errMsg: string) => {
      if (content.value.match(regex)) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = errMsg;
      }
    };

    const checkValidation = () => {
      if (props.rules) {
        for (let index = 0; index < props.rules.length; index++) {
          const rule = props.rules[index];
          if (rule.type == "isRequired") {
            isRequired();
          }

          if (rule.type == "isGreaterThan") {
            isGreaterThan(rule.value);
          }

          if (rule.type == "isLessThan") {
            isLessThan(rule.value);
          }

          if (rule.type == "isEqualsTo") {
            isEqualsTo(rule.value);
          }

          if (rule.type == "isGreaterThanOrEqualsTo") {
            isGreaterThanOrEqualsTo(rule.value);
          }

          if (rule.type == "isLessThanOrEqualsTo") {
            isLessThanOrEqualsTo(rule.value);
          }

          if (rule.type == "isRegex") {
            isRegex(rule.value, rule.errorMessage);
          }

          if (rule.type == "isCondition") {
            isCondition(rule.value, rule.errorMessage);
          }
        }
      }
    };

    watch(content, () => {
      checkValidation();
      if (props.isFormatted) {
        //   content.value = Logic.Common.convertToMoney(
        //     content.value ? content.value.toString().replace(/,/g, "") : 0,
        //     false,
        //     "",
        //     false
        //   );
      }
    });

    watch(props, () => {
      if (props.updateValue) {
        if (props.updateValue == "empty") {
          content.value = "";
        } else {
          content.value = props.updateValue;
        }
      }
    });

    const isNumber = (evt: any) => {
      if (props.type != "tel") return true;

      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    };

    const showError = (message: string) => {
      validationStatus.value = false;
      errorMessage.value = message;
    };

    const isFocused = ref(false);

    const tabIndex = Math.random();

    return {
      content,
      checkValidation,
      isNumber,
      errorMessage,
      validationStatus,
      showError,
      isFocused,
      tabIndex,
      fieldType,
    };
  },
});
</script>
