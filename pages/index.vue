<script setup lang="ts">
import { GChart } from "vue-google-charts";
const chartData = ref([
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
]);
const chartOptions = ref({
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
});
const pieData = ref([
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
]);
const pieOptions = ref({
  title: "My Daily Activities",
  pieHole: 0.4,
  width: "100%",
  height: 600,
} as any);
const calendarData = ref([
  [
    {
      type: "date",
      id: "Date",
    },
    {
      type: "number",
      id: "Visit",
    },
  ],
  [new Date(2022, 3, 13), 37032],
  [new Date(2022, 3, 14), 38024],
  [new Date(2022, 3, 15), 38024],
  [new Date(2022, 3, 16), 38108],
  [new Date(2022, 3, 17), 38229],
  // Many rows omitted for brevity.
  [new Date(2023, 9, 4), 38177],
  [new Date(2023, 9, 5), 38705],
  [new Date(2023, 9, 12), 38210],
  [new Date(2023, 9, 13), 38029],
  [new Date(2023, 9, 19), 38823],
  [new Date(2023, 9, 23), 38345],
  [new Date(2023, 9, 24), 38436],
  [new Date(2023, 9, 30), 38447],
]);
const calendarOptions = ref({
  title: "Number of finished assessments per day",
  width: "100%",
  height: "340",
} as any);
const scatterData = ref([
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2008", 1030, 540],
  ["2009", 1000, 400],
  ["2010", 1170, 460],
  ["2011", 660, 1120],
  ["2022", 1030, 540],
]);
const scatterOptions = ref({
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  width: "100%",
  height: 600,
} as any);
</script>

<template>
  <main>
    <h1 class="text-3xl mb-5 pb-5 border-b text-primary font-bold">
      <v-icon icon="mdi-home"></v-icon> Dashboard
    </h1>

    <div class="border">
      <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
    </div>

    <div class="flex mt-10">
      <div class="w-full mr-5 border">
        <GChart type="PieChart" :data="pieData" :options="pieOptions" />
      </div>
      <div class="w-full ml-5 border">
        <GChart
          type="ScatterChart"
          :data="scatterData"
          :options="scatterOptions"
        />
      </div>
    </div>
    <div class="mt-10 border bg-white p-10">
      <GChart
        :settings="{ packages: ['calendar'] }"
        type="Calendar"
        :data="calendarData"
        :options="calendarOptions"
      />
    </div>
  </main>
</template>
