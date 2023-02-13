<script setup lang="ts">
import { DoughnutChart, LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const testData = {
  labels: [
    "BirthControl",
    "Erectile Disfunction",
    "Hair loss",
    "Weight loss",
    "Prep",
  ],
  datasets: [
    {
      data: [30, 40, 60, 70, 5],
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
};

const lineData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "2022",
      data: [10, 30, 50, 20, 25, 44, -10, 32, 64, 78, 12, 35],
      borderColor: "#0079af",
      backgroundColor: "#0079af",
    },
    {
      label: "2023",
      data: [100, 33, 22, 19, 11, 49, 30, 24, 64, 43, 76, 23],
      borderColor: "#97b0c4",
      backgroundColor: "#97b0c4",
    },
  ],
};
</script>

<template>
  <main>
    <h1 class="text-3xl mb-5 pb-5 border-b text-primary font-bold">
      <v-icon icon="mdi-home"></v-icon> Dashboard
    </h1>

    <DoughnutChart :chartData="testData" class="mt-10" />
    <LineChart :chartData="lineData" class="mt-10" />
  </main>
</template>
