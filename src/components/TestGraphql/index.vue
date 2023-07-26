<template>
<div> test </div>
  <!-- <ion-page>
    <ion-content :scroll-y="false">
      <dashboard-layout :bgColor="'bg-baseBg'"> 
        <div
          class="w-full fixed top-0 left-0 bg-cover z-[8989999089998898] bg-baseBg"
          :style="`height: calc(env(safe-area-inset-top));`"
        ></div>
        <div
          class="w-full flex flex-row justify-between top-0 sticky pt-4 px-4 pb-5 z-[400099999900] bg-baseBg"
        >
          <div class="flex flex-col space-y-1 items-start">
            <unwind-header-text color="!text-textColor" size="xl">
              Wallet
            </unwind-header-text>
            <unwind-normal-text color="!text-lightGray">
              Monitor your transactions here
            </unwind-normal-text>
          </div>
        </div>

        <div
          class="w-full flex flex-col flex-grow h-full !bg-baseBg justify-between"
        >
          <div class="w-full pb-7 flex flex-col">
            <div class="w-full flex flex-col space-y-5 px-4">
              <div
                class="w-full flex flex-row rounded-[24px] justify-between bg-darkGreen items-center px-5 py-5"
                :style="`background-image: url('/images/background-mask.svg');`"
              >
                <div class="flex flex-col space-y-1 items-start">
                  <unwind-normal-text
                    color="!text-primaryGreen"
                    custom-class="!text-sm"
                  >
                    Total balance
                  </unwind-normal-text>
                  <unwind-header-text
                    color="!text-white"
                    custom-class="!text-2xl"
                  >
                    {{
                      Logic.Common.convertToMoney(
                        UserWallet?.total_balance,
                        true,
                        "ngn"
                      )
                    }}
                  </unwind-header-text>
                </div>

                <div
                  class="h-[40px] w-[40px] flex items-center bg-opacity-60 justify-center bg-[#38554D] rounded-[12px] border-[1px] border-[#3E5B53]"
                >
                  <unwind-icon name="eye" custom-class="h-[15px]" />
                </div>
              </div>

              <unwind-button
                :custom-class="'w-full flex flex-row items-center justify-center space-x-2'"
                padding="py-3"
                @click="showAddMoneyModal = true"
              >
                <unwind-icon name="black-add" custom-class="h-[12px]" />
                <unwind-normal-text color="!text-darkGray">
                  Add money
                </unwind-normal-text>
              </unwind-button>
            </div>
            <div
              class="w-full flex flex-col space-y-3 items-start bg-baseBg px-4 pt-6"
            >
              <unwind-header-text size="base">
                Transaction history
              </unwind-header-text>

              <div
                class="w-full flex flex-col space-y-3"
                v-if="transactions.length"
              >
                <unwind-transaction
                  :transaction="transaction"
                  v-for="(transaction, index) in transactions"
                  :key="index"
                >
                </unwind-transaction>
              </div>
              <div class="w-full flex flex-col" v-else>
                <unwind-empty-state :copy="'You have no transaction yet'" />
              </div>
            </div>

            <div class="w-full h-[100px] bg-baseBg"></div>
          </div>
        </div>

        <unwind-modal-template
          v-if="showAddMoneyModal"
          :close="
            () => {
              showAddMoneyModal = false;
            }
          "
          :closable="false"
        >
          <div class="w-full flex flex-col space-y-3 pb-4 px-4 h-full relative">
            <div
              class="flex flex-row items-center space-x-3 bg-white pt-4 sticky top-0 left-0"
            >
              <div
                @click="showAddMoneyModal = false"
                class="h-[34px] w-[34px] flex items-center justify-center bg-white bg-opacity-10 rounded-[12px] border-[1px] border-[#CDDFD7]"
              >
                <unwind-icon name="close" custom-class="h-[10px]" />
              </div>
              <unwind-header-text size="xl">Enter amount</unwind-header-text>
            </div>

            <div class="flex flex-col w-full space-y-3 py-4">
              <unwind-text-field
                :customClass="'bg-[#FAFBFC] border-[1px] border-[#E8E8E8] rounded-[12px]'"
                :placeholder-color="'placeholder-[#A0A0A0]'"
                :placeholder="'Enter amount you want to top up with'"
                :padding="'px-3 py-4'"
                :is-formatted="true"
                :type="'tel'"
                v-model="fundingAmount"
              >
                <template v-slot:inner-prefix>
                  <unwind-normal-text> ₦ </unwind-normal-text>
                </template>
              </unwind-text-field>
            </div>
            <div class="w-full flex flex-col pt-1">
              <unwind-button
                custom-class="w-full"
                padding="py-4"
                @click="showPayment()"
              >
                Next
              </unwind-button>
            </div>
          </div>
        </unwind-modal-template>

        <unwind-payment-modal
          @on-selected="paymentMethodIsSeleted"
          v-if="showPaymentModal"
          :close="
            () => {
              showPaymentModal = false;
            }
          "
          :hideUsdWallet="true"
          :hide-main-wallet="true"
        />
      </dashboard-layout>
    </ion-content>
  </ion-page> -->
</template>

<script lang="ts">
// import { defineComponent, onMounted, ref, watch } from "vue";
// import { useMeta } from "vue-meta";
// import { IonContent, IonPage } from "@ionic/vue";
// import {
//   UnwindHeaderText,
//   UnwindNormalText,
//   UnwindIcon,
//   UnwindButton,
//   UnwindTransaction,
//   UnwindModalTemplate,
//   UnwindTextField,
//   UnwindPaymentModal,
//   UnwindEmptyState,
// } from "@unwind/ui-components";
// import { Logic } from "@unwind/logic";

// export default defineComponent({
//   components: {
//     IonContent,
//     IonPage,
//     UnwindHeaderText,
//     UnwindNormalText,
//     UnwindIcon,
//     UnwindButton,
//     UnwindTransaction,
//     UnwindModalTemplate,
//     UnwindTextField,
//     UnwindPaymentModal,
//     UnwindEmptyState,
//   },
//   name: "WalletPage",
//   middlewares: {
//     fetchRules: [
//       {
//         domain: "Wallet",
//         property: "UserWallet",
//         method: "GetUserWallet",
//         params: [10],
//         requireAuth: true,
//       },
//       {
//         domain: "Wallet",
//         property: "UserCards",
//         method: "GetUserCards",
//         params: [],
//         requireAuth: true,
//       },
//     ],
//     tracking_data: {
//       lable: "Wallet Page",
//       stage_type: "neutral",
//       end_stage: "",
//     },
//   },
//   layout: "Dashboard",
//   setup() {
//     useMeta({
//       title: "Wallet",
//     });

//     const UserWallet = ref(Logic.Wallet.UserWallet);

//     const showAddMoneyModal = ref(false);

//     const fundingAmount = ref("");

//     const showPaymentModal = ref(false);

//     const transactions = ref<any[]>([]);

//     const setTransactions = () => {
//       transactions.value.length = 0;
//       UserWallet.value?.transactions?.data.forEach((transaction) => {
//         transactions.value.push({
//           description: transaction.description,
//           amount: `${
//             transaction.dr_or_cr == "credit" ? "+" : "-"
//           } ${Logic.Common.convertToMoney(
//             transaction.amount,
//             false,
//             "",
//             false,
//             "NGN "
//           )}`,
//           time: `${Logic.Common.fomartDate(
//             transaction.created_at,
//             "Do MMM, YYYY"
//           )} | ${Logic.Common.fomartDate(transaction.created_at, "h:mma")}`,
//           type: transaction.dr_or_cr,
//           uuid: transaction.uuid,
//         });
//       });
//     };

//     const showPayment = () => {
//       const amount = parseFloat(fundingAmount.value.replace(/,/g, ""));

//       if (amount > 0) {
//         showAddMoneyModal.value = false;
//         showPaymentModal.value = true;
//       }
//     };

//     onMounted(() => {
//       setTransactions();
//       Logic.Wallet.watchProperty("UserWallet", UserWallet);
//     });

//     watch(UserWallet, () => {
//       setTransactions();
//     });

//     const paymentMethodIsSeleted = (methodId: string) => {
//       if (methodId) {
//         const fundWalletForm = Logic.Wallet.FundWalletForm;
//         if (methodId != "ngn_wallet") {
//           fundWalletForm.card_uuid = methodId;
//         } else {
//           fundWalletForm.card_uuid = undefined;
//         }

//         const amount = parseFloat(fundingAmount.value.replace(/,/g, ""));

//         fundWalletForm.amount = amount;
//         fundWalletForm.currency = "ngn";

//         Logic.Wallet.FundWallet(true);
//       }
//     };

//     return {
//       transactions,
//       UserWallet,
//       Logic,
//       showAddMoneyModal,
//       showPaymentModal,
//       fundingAmount,
//       showPayment,
//       paymentMethodIsSeleted,
//     };
//   },
// });
</script>