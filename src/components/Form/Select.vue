<template>
  <div :class="`flex flex-col space-y-2 ${defaultSize} `">
    <TypoNormalText v-if="hasTitle" customClass="">
      <slot name="title" />
    </TypoNormalText>
    <div
      :class="`flex relative flex-col items-center space-x-1 justify-between w-full rounded-md ${customClass} ${paddings}`"
      :id="'container' + tabIndex"
      @focus="
        showOption = true;
        isFocused = true;
        ShowSelectModal = true;
        hasAutoComplete = true;
      "
      @blur="
        isFocused = false;
        hideOptions();
      "
      :tabindex="tabIndex"
      @click="showAutoComplete()"
    >
      <div class="w-full flex flex-row space-x-1 items-center">
        <input
          ref="select"
          :value="withKey ? valueData : textValue"
          :placeholder="placeholder"
          v-if="!isMultiple"
          disabled
          :class="` text-bouhaws-text-black flex-grow !font-light bg-transparent placeholder-primaryGray focus input w-full focus:outline-none   lg:text-sm mdlg:text-[12px] text-xs f`"
        />
        <div
          v-else
          class="w-full flex flex-row whitespace-nowrap overflow-x-auto scrollbar-hide space-x-2 focus"
          :id="`mutipleItemContainer` + tabIndex"
        >
          <roof-badge
            :color="'purple'"
            v-for="(option, index) in selectedItems"
            :key="index"
            >{{ getSelectedOption(option) }}</roof-badge
          >
        </div>
        <span class="pr-1">
          <IconLoader
            @click.stop="
              showOption = true;
              isFocused = true;
            "
            name="angle-small-down"
            custom-class=" h-[9px] cursor-pointer"
          />
        </span>
      </div>

      <div
        v-if="(showOption && hasAutoComplete) || (showOption && isDatePicker)"
        @click.stop="null"
        :class="`w-full flex flex-col top-[101%]  bg-white z-50 max-h-[800px] ${
          isAbsolute ? 'min-w-[140px]' : ' mt-3'
        }  overflow-y-auto rounded-md pb-3 px-3 shadow-md  ${
          isAbsolute ? 'absolute' : ''
        }  ${isDatePicker ? '!min-w-[320px] pt-3  !right-0' : 'left-0'}`"
      >
        <template v-if="!isDatePicker">
          <div
            class="w-full py-2 sticky top-0 bg-white flex flex-row items-center justify-between"
            v-if="autoComplete"
          >
            <roof-text-field
              placeholder="Search"
              v-model="searchValue"
              custom-class="w-full !border-none !border-b-[1px] !bg-[whitesmoke]"
            >
            </roof-text-field>
            <span
              class="pl-3 cursor-pointer"
              @click.stop="
                showOption = false;
                hasAutoComplete = false;
              "
            >
              <IconLoader :name="'cross-circle'" :customClass="'h-[19px]'" />
            </span>
          </div>
          <div
            class="w-full flex flex-row py-2 bg-white"
            v-if="!autoComplete"
          ></div>

          <div
            class="py-3 px-3 w-full flex flex-row items-center hover:!bg-gray-100 cursor-pointer"
            v-for="(item, index) in searchResult"
            :key="index"
            @click.stop="selectValue(item)"
          >
            <template v-if="isMultiple">
              <div class="w-full flex flex-row space-x-3 items-center">
                <IconLoader
                  :name="
                    itemIsSelected(item.key) ? 'checkbox-active' : 'checkbox'
                  "
                  custom-class="h-[16px]"
                  v-if="itemIsSelected(item.key)"
                />
                <span
                  v-else
                  class="w-[17px] h-[17px] rounded-[3px] border-[1px] border-black"
                >
                </span>
                <TypoNormalText>
                  {{ item.value }}
                </TypoNormalText>
              </div>
            </template>
            <TypoNormalText v-else>
              {{ item.value }}
            </TypoNormalText>
          </div>
        </template>

        <template v-if="isDatePicker">
          <div class="grid grid-cols-2 gap-3 pb-2 px-2">
            <div :class="`col-span-1 flex flex-col space-y-2`">
              <TypoNormalText> From </TypoNormalText>
              <div
                @click="selectedDatePicker = 'from'"
                :class="`w-full h-[40px] rounded bg-grey100 cursor-pointer flex flex-row items-center justify-center ${
                  selectedDatePicker == 'from'
                    ? 'border-[1px] border-primaryGreen'
                    : 'border-[1px] border-grey100'
                }`"
              >
                <TypoNormalText>
                  {{ datePickerData.from }}
                </TypoNormalText>
              </div>
            </div>
            <div :class="`col-span-1 flex flex-col space-y-2`">
              <TypoNormalText> To </TypoNormalText>
              <div
                @click="selectedDatePicker = 'to'"
                :class="`w-full h-[40px] rounded bg-grey100 flex  cursor-pointerflex-row items-center justify-center ${
                  selectedDatePicker == 'to'
                    ? 'border-[1px] border-primaryGreen'
                    : 'border-[1px] border-grey100'
                }`"
              >
                <TypoNormalText>
                  {{ datePickerData.to }}
                </TypoNormalText>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-row pb-4 px-2">
            <TypoNormalText v-if="datePickerError" :color="'!text-red'">
              {{ datePickerError }}
            </TypoNormalText>
          </div>

          <roof-calendar
            :default-date="datePickerDefaultDate"
            v-model="datePickerSelectedDate"
          />
          <div
            class="pt-3 w-full flex flex-row justify-between items-center px-1 z-50"
            @click.stop="null"
          >
            <roof-button
              :bg-color="'bg-gray-100'"
              :textColor="'text-gray-600'"
              @click.stop="showOption = false"
            >
              Cancel
            </roof-button>

            <div
              @click.stop="setDatePicker()"
              class="px-5 py-2 cursor-pointer rounded-md bg-primaryOrange text-buttonText"
            >
              Done
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  capitalize,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRef,
  watch,
} from "vue";

import moment from "moment";
import IconLoader from "../../components/IconLoader/index.vue";
import ImageLoader from "../../components/ImageLoader/index.vue";
import TypoNormalText from "../../components/Typo/NormalText.vue";
import TypoHeaderText from "../../components/Typo/HeaderText.vue";
import Button from "../../components/Button/index.vue";
import Avatar from "../../components/Avatar/index.vue";

export interface SelectOption {
  key: any;
  value: string;
  extras?: string;
  hasIcon?: boolean;
  isImage?: boolean;
  isString?: boolean;
}

const isString = (x: any) => {
  return Object.prototype.toString.call(x) === "[object String]";
};

const searchArray = (arr: any[], searchKey: string) => {
  return arr.filter((obj) => {
    return Object.keys(obj).some((key) => {
      return isString(obj[key]) ? obj[key].includes(searchKey) : false;
    });
  });
};

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText,
    Button,
    Avatar,
    ImageLoader,
  },
  props: {
    withKey: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Array as () => SelectOption[],
    },
    paddings: {
      type: String,
      default: "py-4 px-3",
    },
    padding: {
      type: String,
      default: "py-4 px-3",
    },
    customClass: {
      type: String,
      default: "",
    },
    defaultValues: {
      required: false,
      default: [],
    },
    modelValue: {
      type: String || Array || Object,
      default: false,
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
    hasTitle: {
      type: Boolean,
      default: false,
    },
    defaultSize: {
      type: String,
      default: "w-full",
    },
    autoComplete: {
      type: Boolean,
      default: false,
    },
    labelStyle: {
      type: String,
      default: "",
    },
    isAbsolute: {
      type: Boolean,
      default: true,
    },
    isDatePicker: {
      type: Boolean,
      default: false,
    },
    dateDefault: {
      type: Object as () => {
        from: string;
        to: string;
      },
      default: {
        from: "",
        to: "",
      },
    },
    dateDifference: {
      type: Number,
      default: 7,
    },
  },
  emits: ["update:modelValue", "OnOptionSelected", "OnSearch"],
  setup(props: any, context: any) {
    const isFocused = ref(false);
    const showOption = ref(false);

    const tabIndex = Math.random();

    const ShowSelectModal = ref(false);

    const OptionRef = ref<SelectOption[]>([]);

    const searchResult = ref<SelectOption[]>([]);

    const selectedKey = ref();

    const valueData = ref("");

    const textValue = ref("");

    const searchValue = ref("");

    const hasAutoComplete = ref(false);

    const selectOptions = ref<any[]>([]);

    const datePickerDefaultDate = ref("");

    const datePickerSelectedDate = ref("");

    const dateDefaultRef = toRef(props, "dateDefault");

    const datePickerData = reactive({
      from: "",
      to: "",
    });

    const selectedDatePicker = ref("to");

    const datePickerError = ref("");

    const showAutoComplete = () => {
      if (props.autoComplete) {
        hasAutoComplete.value = true;
      }
    };

    const hideOptions = () => {
      if (!props.autoComplete) {
        showOption.value = false;
      }
    };

    const prepareSelectOptions = () => {
      selectOptions.value.length = 0;

      if (Array.isArray(searchResult.value)) {
        searchResult.value.forEach((item: any) => {
          selectOptions.value.push({
            key: item.key,
            value: `${item.value}${props.withKey ? ` (${item.key})` : ""}`,
            hasIcon: item.hasIcon ? item.hasIcon : false,
            extras: item.extras ? item.extras : "",
            isImage: item.isImage ? item.isImage : false,
          });
        });
      }
    };

    watch(selectedKey, () => {
      if (selectedKey.value != 0) {
        const selectedOption = searchResult.value.filter((eachItem: any) => {
          return eachItem.key == selectedKey.value;
        });
        selectValue(selectedOption[0]);
        ShowSelectModal.value = false;
      }
    });

    const selectedItems = ref<any>([]);

    watch(props, () => {
      if (props.options && !props.isMultiple) {
        OptionRef.value = props.options;
      }
      prepareSelectOptions();
    });

    watch(datePickerSelectedDate, () => {
      if (selectedDatePicker.value == "from") {
        datePickerData.from = datePickerSelectedDate.value;
      }

      if (selectedDatePicker.value == "to") {
        datePickerData.to = datePickerSelectedDate.value;
      }
    });

    watch(datePickerData, () => {
      const dateDifference = moment(datePickerData.to).diff(
        moment(datePickerData.from),
        "day"
      );

      datePickerError.value = "";

      if (dateDifference <= 0) {
        datePickerError.value = "From date must be less then To date";
        return;
      }

      if (props.dateDifference == 0) {
        return;
      }

      if (dateDifference != props.dateDifference) {
        datePickerError.value = `Date difference must be ${props.dateDifference} days`;
        return;
      }
    });

    watch(selectedDatePicker, () => {
      if (selectedDatePicker.value == "from") {
        datePickerDefaultDate.value = datePickerData.from;
      }
      if (selectedDatePicker.value == "to") {
        datePickerDefaultDate.value = datePickerData.to;
      }
    });

    const setDatePicker = () => {
      context.emit("update:modelValue", datePickerData);
      context.emit("OnOptionSelected", datePickerData);
      showOption.value = false;
    };

    watch(dateDefaultRef, () => {
      if (dateDefaultRef.value) {
        if (props.isDatePicker) {
          datePickerData.from = dateDefaultRef.value.from;
          datePickerData.to = dateDefaultRef.value.to;
        }
      }
    });

    onMounted(() => {
      if (props.defaultValues.length > 0) {
        selectedItems.value = props.defaultValues;
      }
      if (props.options) {
        OptionRef.value = props.options;
        searchResult.value = props.options;
      }

      if (props.autoComplete) {
        hasAutoComplete.value = props.autoComplete;
      }

      if (props.isDatePicker) {
        datePickerData.from = props.dateDefault.from;
        datePickerData.to = props.dateDefault.to;
        datePickerSelectedDate.value = props.dateDefault.from;
      }

      if (props.isMultiple) {
        selectedItems.value = props.modelValue;
      }

      if (props.modelValue && !props.isMultiple) {
        const selectedOption = searchResult.value.filter((eachItem: any) => {
          return eachItem.key == props.modelValue;
        });
        selectedKey.value = props.modelValue;
        if (selectedOption.length > 0) {
          selectValue(selectedOption[0]);
        }
      }
      prepareSelectOptions();
    });

    const itemIsSelected = (inputKey: string) => {
      const item = selectedItems.value.filter((key: any) => {
        return key == inputKey;
      });

      return item.length > 0;
    };

    const selectValue = (option: any) => {
      if (!option) return;
      if (props.autoComplete) {
        context.emit("OnOptionSelected", option.key);

        isFocused.value = false;
        showOption.value = false;
        hasAutoComplete.value = false;

        if (props.withKey) {
          valueData.value = option.key;
        } else {
          valueData.value = option.value;
          textValue.value = option.value;
        }

        context.emit("update:modelValue", option.key);

        document.getElementById("container" + tabIndex)?.blur();

        if (!props.hasConfirmation) {
          ShowSelectModal.value = false;
        }
      }

      if (props.isMultiple) {
        if (itemIsSelected(option.key)) {
          selectedItems.value = selectedItems.value.filter((key: any) => {
            return key != option.key;
          });

          document.getElementById("mutipleItemContainer" + tabIndex)?.scrollTo({
            left: 8000,
          });

          context.emit("OnOptionSelected", {
            selectedItems: selectedItems.value,
            extraData: props.extraData,
          });

          context.emit("update:modelValue", selectedItems.value);

          return;
        }

        selectedItems.value.push(option.key);

        document.getElementById("mutipleItemContainer" + tabIndex)?.scrollTo({
          left: 8000,
        });

        context.emit("update:modelValue", selectedItems.value);
        context.emit("OnOptionSelected", {
          selectedItems: selectedItems.value,
          extraData: props.extraData,
        });
      } else {
        context.emit("update:modelValue", option.key);
        context.emit("OnOptionSelected", option.key);
        if (props.withKey) {
          valueData.value = option.key;
        } else {
          valueData.value = option.value;
          textValue.value = option.value;
        }
        isFocused.value = false;
        showOption.value = false;

        document.getElementById("container" + tabIndex)?.blur();

        if (!props.hasConfirmation) {
          ShowSelectModal.value = false;
        }
      }
    };

    const getSelectedOption = (keyValue: any) => {
      const option = searchResult.value.filter((eachItem: any) => {
        return eachItem.key == keyValue;
      });

      return option[0].value;
    };

    const searchOption = () => {
      if (props.autoComplete) {
        searchResult.value = searchArray(
          OptionRef.value,
          capitalize(searchValue.value)
        );
      }
    };

    watch(searchValue, () => {
      searchOption();
    });

    watch(OptionRef, () => {
      searchOption();
    });

    watch(searchResult, () => {
      prepareSelectOptions();
    });

    return {
      showOption,
      valueData,
      isFocused,
      selectValue,
      tabIndex,
      textValue,
      itemIsSelected,
      selectedItems,
      getSelectedOption,
      ShowSelectModal,
      selectOptions,
      selectedKey,
      searchValue,
      searchResult,
      hasAutoComplete,
      hideOptions,
      showAutoComplete,
      datePickerData,
      selectedDatePicker,
      datePickerDefaultDate,
      datePickerSelectedDate,
      datePickerError,
      setDatePicker,
    };
  },
});
</script>
