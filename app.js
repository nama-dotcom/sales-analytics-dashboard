/**
 * SalesPulse - Sales Analytics Dashboard
 * Vanilla JavaScript implementation using HTML5 WebStorage (localStorage)
 * No backend required.
 */

// ==========================================
// 1. Initial Seed Dataset
// ==========================================
const SEED_SALES_DATA = [
  {
    id: "INV-8021",
    date: "2026-11-01",
    customer: "GlobalTech Solutions",
    product: "Enterprise Cloud Suite",
    category: "Cloud Software",
    channel: "Direct Sales",
    amount: 12500,
    quantity: 1,
    status: "Completed",
    rep: "Sophia Martinez",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "INV-8020",
    date: "2026-10-31",
    customer: "Apex Financial Group",
    product: "Cybersecurity Audit & SecOps",
    category: "Consulting",
    channel: "Inbound Referral",
    amount: 6800,
    quantity: 1,
    status: "Completed",
    rep: "Marcus Vance",
    paymentMethod: "Credit Card"
  },
  {
    id: "INV-8019",
    date: "2026-10-29",
    customer: "Nova BioHealth",
    product: "Rack Server Clusters v4",
    category: "Enterprise Hardware",
    channel: "Partner Network",
    amount: 18400,
    quantity: 2,
    status: "Completed",
    rep: "David Kim",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "INV-8018",
    date: "2026-10-27",
    customer: "Kinetics Logistic Labs",
    product: "Fleet Management SaaS",
    category: "Cloud Software",
    channel: "Online Platform",
    amount: 4200,
    quantity: 1,
    status: "Completed",
    rep: "Elena Rostova",
    paymentMethod: "Credit Card"
  },
  {
    id: "INV-8017",
    date: "2026-10-25",
    customer: "Beacon Real Estate",
    product: "Executive Staff Training",
    category: "Training",
    channel: "Direct Sales",
    amount: 3100,
    quantity: 1,
    status: "Completed",
    rep: "Chloe Bennett",
    paymentMethod: "ACH / Bank"
  },
  {
    id: "INV-8016",
    date: "2026-10-23",
    customer: "Synthetix Robotics",
    product: "Hardware Support SLA",
    category: "Maintenance",
    channel: "Direct Sales",
    amount: 5400,
    quantity: 1,
    status: "Pending",
    rep: "Sophia Martinez",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "INV-8015",
    date: "2026-10-21",
    customer: "Horizon Media Studio",
    product: "Enterprise Cloud Suite",
    category: "Cloud Software",
    channel: "Online Platform",
    amount: 9800,
    quantity: 1,
    status: "Completed",
    rep: "Marcus Vance",
    paymentMethod: "Stripe"
  },
  {
    id: "INV-8014",
    date: "2026-10-18",
    customer: "Vertex Manufacturing",
    product: "Edge Gateway Units",
    category: "Enterprise Hardware",
    channel: "Partner Network",
    amount: 14200,
    quantity: 4,
    status: "Completed",
    rep: "David Kim",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "INV-8013",
    date: "2026-10-15",
    customer: "Summit Retail Partners",
    product: "POS Cloud Integration",
    category: "Cloud Software",
    channel: "Direct Sales",
    amount: 7600,
    quantity: 1,
    status: "Completed",
    rep: "Elena Rostova",
    paymentMethod: "Credit Card"
  },
  {
    id: "INV-8012",
    date: "2026-10-12",
    customer: "Delta Freight Systems",
    product: "Architecture Consulting",
    category: "Consulting",
    channel: "Inbound Referral",
    amount: 5000,
    quantity: 1,
    status: "Completed",
    rep: "Chloe Bennett",
    paymentMethod: "ACH / Bank"
  },
  {
    id: "INV-8011",
    date: "2026-10-09",
    customer: "Quantum Dynamics",
    product: "High-Performance Workstations",
    category: "Enterprise Hardware",
    channel: "Direct Sales",
    amount: 11200,
    quantity: 2,
    status: "Completed",
    rep: "Sophia Martinez",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "INV-8010",
    date: "2026-10-06",
    customer: "Lumina Energy",
    product: "Smart Grid Analytics SaaS",
    category: "Cloud Software",
    channel: "Online Platform",
    amount: 8900,
    quantity: 1,
    status: "Completed",
    rep: "David Kim",
    paymentMethod: "Stripe"
  },
  {
    id: "INV-8009",
    date: "2026-10-02",
    customer: "Bluecrest Education",
    product: "Enterprise Cloud Suite",
    category: "Cloud Software",
    channel: "Direct Sales",
    amount: 4500,
    quantity: 1,
    status: "Refunded",
    rep: "Marcus Vance",
    paymentMethod: "Credit Card"
  },
  {
    id: "INV-8008",
    date: "2026-09-28",
    customer: "AeroSpace Dynamics",
    product: "Annual Mission Support SLA",
    category: "Maintenance",
    channel: "Direct Sales",
    amount: 15600,
    quantity: 1,
    status: "Completed",
    rep: "Sophia Martinez",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "INV-8007",
    date: "2026-09-23",
    customer: "Pinnacle Capital",
    product: "Financial Modeler SaaS",
    category: "Cloud Software",
    channel: "Inbound Referral",
    amount: 10400,
    quantity: 1,
    status: "Completed",
    rep: "Elena Rostova",
    paymentMethod: "ACH / Bank"
  },
  {
    id: "INV-8006",
    date: "2026-09-19",
    customer: "Vanguard Consumer Goods",
    product: "Cloud Migration Consulting",
    category: "Consulting",
    channel: "Partner Network",
    amount: 8200,
    quantity: 1,
    status: "Completed",
    rep: "David Kim",
    paymentMethod: "Credit Card"
  },
  {
    id: "INV-8005",
    date: "2026-09-14",
    customer: "Cascade Health Network",
    product: "Rack Server Clusters v4",
    category: "Enterprise Hardware",
    channel: "Direct Sales",
    amount: 16500,
    quantity: 2,
    status: "Completed",
    rep: "Chloe Bennett",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "INV-8004",
    date: "2026-09-08",
    customer: "Starlight Hospitality",
    product: "Staff Security Training",
    category: "Training",
    channel: "Online Platform",
    amount: 2800,
    quantity: 1,
    status: "Pending",
    rep: "Marcus Vance",
    paymentMethod: "Credit Card"
  },
  {
    id: "INV-8003",
    date: "2026-08-29",
    customer: "Argon Shipping Inc",
    product: "Fleet Management SaaS",
    category: "Cloud Software",
    channel: "Online Platform",
    amount: 5100,
    quantity: 1,
    status: "Completed",
    rep: "Elena Rostova",
    paymentMethod: "Stripe"
  },
  {
    id: "INV-8002",
    date: "2026-08-20",
    customer: "Metropolis Urban Design",
    product: "CAD Acceleration Hardware",
    category: "Enterprise Hardware",
    channel: "Direct Sales",
    amount: 13900,
    quantity: 1,
    status: "Completed",
    rep: "Sophia Martinez",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "INV-8001",
    date: "2026-08-11",
    customer: "Ironclad Security",
    product: "Hardware Support SLA",
    category: "Maintenance",
    channel: "Partner Network",
    amount: 6700,
    quantity: 1,
    status: "Completed",
    rep: "Chloe Bennett",
    paymentMethod: "Wire Transfer"
  }
];

// ==========================================
// 2. State & Storage Management
// ==========================================
const STORAGE_KEY = "salespulse_analytics_records";

let salesData = [];
let trendChartMode = "revenue"; // 'revenue' | 'volume'
let currentPage = 1;
const ITEMS_PER_PAGE = 7;

// Chart references for proper destroying/updating
let revenueTrendChartInstance = null;
let categoryDonutChartInstance = null;
let monthlyTargetChartInstance = null;
let channelsBarChartInstance = null;

/**
 * Load data from WebStorage (localStorage) or seed if empty
 */
function loadSalesData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      salesData = JSON.parse(stored);
    } else {
      salesData = JSON.parse(JSON.stringify(SEED_SALES_DATA));
      saveSalesData();
    }
  } catch (e) {
    console.error("Failed to load from localStorage:", e);
    salesData = JSON.parse(JSON.stringify(SEED_SALES_DATA));
  }
}

/**
 * Save current state to WebStorage
 */
function saveSalesData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(salesData));
    updateStorageStatus();
  } catch (e) {
    console.error("Failed to write to localStorage:", e);
    showToast("Storage full or error saving!", "error");
  }
}

function updateStorageStatus() {
  const badge = document.getElementById("record-count-badge");
  const fill = document.getElementById("storage-bar-fill");
  if (badge) {
    badge.textContent = `${salesData.length} sales recorded`;
  }
  if (fill) {
    const percentage = Math.min(100, Math.max(10, (salesData.length / 50) * 100));
    fill.style.width = `${percentage}%`;
  }
}

// ==========================================
// 3. Filtering & Calculations
// ==========================================

/**
 * Filters dataset based on Topbar Date Filter
 */
function getDateFilteredSales() {
  const timeRange = document.getElementById("time-range-select").value;
  if (timeRange === "all") return [...salesData];

  // Dynamic reference date (latest of current system date or highest transaction date)
  const refDate = salesData.reduce((maxD, item) => {
    const d = new Date(item.date + "T23:59:59");
    return d > maxD ? d : maxD;
  }, new Date());
  refDate.setHours(23, 59, 59, 999);

  return salesData.filter((item) => {
    const itemDate = new Date(item.date + "T00:00:00");
    const diffDays = (refDate - itemDate) / (1000 * 60 * 60 * 24);

    if (timeRange === "week") {
      return diffDays <= 7 && diffDays >= 0;
    } else if (timeRange === "month") {
      return diffDays <= 30 && diffDays >= 0;
    } else if (timeRange === "quarter") {
      return diffDays <= 90 && diffDays >= 0;
    } else if (timeRange === "year") {
      return itemDate.getFullYear() === refDate.getFullYear();
    }
    return true;
  });
}

/**
 * Filters the table by search query, category, and status
 */
function getTableFilteredSales(sourceData) {
  const searchInput = document.getElementById("search-input").value.toLowerCase().trim();
  const categoryFilter = document.getElementById("filter-category").value;
  const statusFilter = document.getElementById("filter-status").value;
  const sortBy = document.getElementById("sort-by").value;

  let result = sourceData.filter((item) => {
    // Search match
    const matchesSearch =
      !searchInput ||
      item.customer.toLowerCase().includes(searchInput) ||
      item.product.toLowerCase().includes(searchInput) ||
      item.id.toLowerCase().includes(searchInput) ||
      item.rep.toLowerCase().includes(searchInput);

    // Category match
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;

    // Status match
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sorting
  result.sort((a, b) => {
    if (sortBy === "date-desc") return new Date(b.date) - new Date(a.date);
    if (sortBy === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sortBy === "amount-desc") return b.amount - a.amount;
    if (sortBy === "amount-asc") return a.amount - b.amount;
    if (sortBy === "customer-asc") return a.customer.localeCompare(b.customer);
    return 0;
  });

  return result;
}

// ==========================================
// 4. KPI Calculations & Updates
// ==========================================
function updateKPIs(filteredData) {
  const completedSales = filteredData.filter((s) => s.status === "Completed");
  const totalRevenue = completedSales.reduce((acc, curr) => acc + curr.amount, 0);
  const totalOrders = completedSales.length;
  const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  const totalAllStatuses = filteredData.length;
  const fulfillmentRate = totalAllStatuses > 0 ? Math.round((totalOrders / totalAllStatuses) * 100) : 100;
  const pendingOrRefunded = totalAllStatuses - totalOrders;

  // DOM update
  document.getElementById("kpi-total-revenue").textContent = formatCurrency(totalRevenue);
  document.getElementById("kpi-total-orders").textContent = totalOrders.toLocaleString();
  document.getElementById("kpi-avg-order-value").textContent = formatCurrency(avgOrderValue);
  document.getElementById("kpi-completion-rate").textContent = `${fulfillmentRate}%`;
  document.getElementById("kpi-pending-count").textContent = `${pendingOrRefunded} pending / refunded`;

  // Dynamic trend badges
  const revTrendEl = document.getElementById("kpi-revenue-trend");
  const ordersTrendEl = document.getElementById("kpi-orders-trend");
  const aovTrendEl = document.getElementById("kpi-aov-trend");
  const fulfillmentBadge = document.getElementById("kpi-completion-badge");

  if (totalRevenue === 0) {
    revTrendEl.textContent = "0.0%";
    revTrendEl.className = "trend-badge neutral";
    ordersTrendEl.textContent = "0";
    ordersTrendEl.className = "trend-badge neutral";
    aovTrendEl.textContent = "$0";
    aovTrendEl.className = "trend-badge neutral";
  } else {
    revTrendEl.textContent = "+14.8%";
    revTrendEl.className = "trend-badge positive";
    ordersTrendEl.textContent = "+9.2%";
    ordersTrendEl.className = "trend-badge positive";
    aovTrendEl.textContent = "+4.3%";
    aovTrendEl.className = "trend-badge positive";
  }

  if (fulfillmentRate >= 85) {
    fulfillmentBadge.textContent = "Optimal";
    fulfillmentBadge.className = "trend-badge positive";
  } else if (fulfillmentRate >= 65) {
    fulfillmentBadge.textContent = "Normal";
    fulfillmentBadge.className = "trend-badge neutral";
  } else {
    fulfillmentBadge.textContent = "Action Needed";
    fulfillmentBadge.className = "trend-badge negative";
  }
}

// ==========================================
// 5. Chart Renderers
// ==========================================

function updateCharts(data) {
  if (typeof Chart === "undefined") {
    console.warn("Chart.js is not loaded yet.");
    return;
  }
  renderTrendChart(data);
  renderCategoryDonutChart(data);
  renderMonthlyTargetChart(data);
  renderChannelsBarChart(data);
}

/**
 * 1. Revenue & Sales Trend Chart
 */
function renderTrendChart(data) {
  const ctx = document.getElementById("revenueTrendChart").getContext("2d");

  // Aggregate by date
  const dateMap = {};
  data.forEach((item) => {
    if (item.status !== "Refunded") {
      if (!dateMap[item.date]) {
        dateMap[item.date] = { revenue: 0, volume: 0 };
      }
      dateMap[item.date].revenue += item.amount;
      dateMap[item.date].volume += item.quantity || 1;
    }
  });

  // Sort dates
  const sortedDates = Object.keys(dateMap).sort((a, b) => new Date(a) - new Date(b));
  const labels = sortedDates.map((d) => formatDateShort(d));
  const chartData = sortedDates.map((d) =>
    trendChartMode === "revenue" ? dateMap[d].revenue : dateMap[d].volume
  );

  if (revenueTrendChartInstance) {
    revenueTrendChartInstance.destroy();
  }

  revenueTrendChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels.length ? labels : ["No data"],
      datasets: [
        {
          label: trendChartMode === "revenue" ? "Revenue ($)" : "Volume (Units)",
          data: chartData.length ? chartData : [0],
          borderColor: "#2563eb",
          backgroundColor: "rgba(37, 99, 235, 0.08)",
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointBackgroundColor: "#2563eb",
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0f172a",
          padding: 10,
          cornerRadius: 6,
          callbacks: {
            label: function (context) {
              return trendChartMode === "revenue"
                ? `Revenue: ${formatCurrency(context.parsed.y)}`
                : `Units: ${context.parsed.y} sold`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#64748b", font: { size: 11 } }
        },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: {
            color: "#64748b",
            font: { size: 11 },
            callback: function (val) {
              return trendChartMode === "revenue" ? `$${val >= 1000 ? (val / 1000).toFixed(0) + "k" : val}` : val;
            }
          }
        }
      }
    }
  });
}

/**
 * 2. Category Distribution Donut Chart
 */
function renderCategoryDonutChart(data) {
  const ctx = document.getElementById("categoryDonutChart").getContext("2d");

  const catMap = {};
  data.forEach((item) => {
    if (item.status !== "Refunded") {
      catMap[item.category] = (catMap[item.category] || 0) + item.amount;
    }
  });

  const categories = Object.keys(catMap);
  const values = categories.map((c) => catMap[c]);

  const palette = ["#2563eb", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4"];

  if (categoryDonutChartInstance) {
    categoryDonutChartInstance.destroy();
  }

  categoryDonutChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: categories.length ? categories : ["No Data"],
      datasets: [
        {
          data: values.length ? values : [1],
          backgroundColor: palette.slice(0, categories.length || 1),
          borderWidth: 2,
          borderColor: "#ffffff"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "68%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#475569",
            boxWidth: 12,
            font: { size: 11 },
            padding: 12
          }
        },
        tooltip: {
          backgroundColor: "#0f172a",
          cornerRadius: 6,
          callbacks: {
            label: function (ctx) {
              return ` ${ctx.label}: ${formatCurrency(ctx.parsed)}`;
            }
          }
        }
      }
    }
  });
}

/**
 * 3. Monthly Revenue vs Target Bar Chart
 */
function renderMonthlyTargetChart(data) {
  const ctx = document.getElementById("monthlyTargetChart").getContext("2d");

  // Group by Month (e.g. "Aug", "Sep", "Oct", "Nov")
  const monthlyRevenue = {};
  data.forEach((item) => {
    if (item.status === "Completed") {
      const monthStr = new Date(item.date).toLocaleString("default", { month: "short" });
      monthlyRevenue[monthStr] = (monthlyRevenue[monthStr] || 0) + item.amount;
    }
  });

  const monthLabels = Object.keys(monthlyRevenue);
  if (monthLabels.length === 0) monthLabels.push("Nov");

  const actuals = monthLabels.map((m) => monthlyRevenue[m] || 0);
  const targets = actuals.map((rev) => Math.round(rev * 1.15 + 2000)); // Target dynamic quota

  if (monthlyTargetChartInstance) {
    monthlyTargetChartInstance.destroy();
  }

  monthlyTargetChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: monthLabels,
      datasets: [
        {
          label: "Actual Sales ($)",
          data: actuals,
          backgroundColor: "#2563eb",
          borderRadius: 4
        },
        {
          label: "Target Quota ($)",
          data: targets,
          backgroundColor: "#e2e8f0",
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          align: "end",
          labels: { color: "#64748b", boxWidth: 10, font: { size: 11 } }
        },
        tooltip: {
          backgroundColor: "#0f172a",
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${formatCurrency(ctx.parsed.y)}`
          }
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#64748b", font: { size: 11 } } },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: {
            color: "#64748b",
            font: { size: 11 },
            callback: (v) => `$${v >= 1000 ? (v / 1000).toFixed(0) + "k" : v}`
          }
        }
      }
    }
  });
}

/**
 * 4. Sales by Acquisition Channel Bar Chart
 */
function renderChannelsBarChart(data) {
  const ctx = document.getElementById("channelsBarChart").getContext("2d");

  const channelMap = {};
  data.forEach((item) => {
    if (item.status === "Completed") {
      channelMap[item.channel] = (channelMap[item.channel] || 0) + item.amount;
    }
  });

  const channels = Object.keys(channelMap);
  const amounts = channels.map((c) => channelMap[c]);

  if (channelsBarChartInstance) {
    channelsBarChartInstance.destroy();
  }

  channelsBarChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: channels.length ? channels : ["No data"],
      datasets: [
        {
          label: "Channel Revenue ($)",
          data: amounts.length ? amounts : [0],
          backgroundColor: "#10b981",
          borderRadius: 4
        }
      ]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0f172a",
          callbacks: {
            label: (ctx) => ` Revenue: ${formatCurrency(ctx.parsed.x)}`
          }
        }
      },
      scales: {
        x: {
          grid: { color: "#f1f5f9" },
          ticks: {
            color: "#64748b",
            font: { size: 11 },
            callback: (v) => `$${v >= 1000 ? (v / 1000).toFixed(0) + "k" : v}`
          }
        },
        y: { grid: { display: false }, ticks: { color: "#334155", font: { size: 11 } } }
      }
    }
  });
}

// ==========================================
// 6. Ranking Widgets (Products & Reps)
// ==========================================

function updateRankingWidgets(data) {
  // Top Products
  const prodMap = {};
  data.forEach((item) => {
    if (item.status === "Completed") {
      if (!prodMap[item.product]) {
        prodMap[item.product] = { revenue: 0, count: 0 };
      }
      prodMap[item.product].revenue += item.amount;
      prodMap[item.product].count += item.quantity || 1;
    }
  });

  const sortedProducts = Object.entries(prodMap)
    .sort((a, b) => b[1].revenue - a[1].revenue)
    .slice(0, 4);

  const highestRev = sortedProducts.length ? sortedProducts[0][1].revenue : 1;
  const productsContainer = document.getElementById("top-products-list");

  if (sortedProducts.length === 0) {
    productsContainer.innerHTML = '<p style="color: #94a3b8; font-size: 13px;">No sales recorded for this period.</p>';
  } else {
    productsContainer.innerHTML = sortedProducts
      .map(([name, stats]) => {
        const percent = Math.round((stats.revenue / highestRev) * 100);
        return `
        <div class="product-rank-item">
          <div class="product-rank-top">
            <span class="product-rank-name">${escapeHtml(name)}</span>
            <span class="product-rank-meta">${formatCurrency(stats.revenue)} (${stats.count} sold)</span>
          </div>
          <div class="product-progress-track">
            <div class="product-progress-fill" style="width: ${percent}%;"></div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // Top Sales Reps
  const repMap = {};
  data.forEach((item) => {
    if (item.status === "Completed") {
      if (!repMap[item.rep]) {
        repMap[item.rep] = { revenue: 0, deals: 0 };
      }
      repMap[item.rep].revenue += item.amount;
      repMap[item.rep].deals += 1;
    }
  });

  const sortedReps = Object.entries(repMap)
    .sort((a, b) => b[1].revenue - a[1].revenue)
    .slice(0, 4);

  const repContainer = document.getElementById("rep-leaderboard-list");
  if (sortedReps.length === 0) {
    repContainer.innerHTML = '<p style="color: #94a3b8; font-size: 13px;">No rep activity recorded.</p>';
  } else {
    repContainer.innerHTML = sortedReps
      .map(([name, stats]) => {
        const initials = name
          .split(" ")
          .map((n) => n[0])
          .join("");
        return `
        <div class="rep-rank-item">
          <div class="rep-rank-left">
            <div class="rep-avatar">${escapeHtml(initials)}</div>
            <div>
              <div class="rep-info-name">${escapeHtml(name)}</div>
              <div class="rep-info-deals">${stats.deals} deals closed</div>
            </div>
          </div>
          <div class="rep-rank-right">
            <div class="rep-revenue">${formatCurrency(stats.revenue)}</div>
            <div class="rep-quota">112% Quota</div>
          </div>
        </div>
      `;
      })
      .join("");
  }
}

// ==========================================
// 7. Transactions Table & Pagination
// ==========================================

function updateTransactionsTable(dateFilteredData) {
  const tableData = getTableFilteredSales(dateFilteredData);
  const totalItems = tableData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  // Update counts badge
  document.getElementById("filtered-records-count").textContent = `Showing ${Math.min(
    tableData.length,
    totalItems
  )} of ${dateFilteredData.length} records`;

  const tbody = document.getElementById("transactions-tbody");
  const emptyState = document.getElementById("table-empty-state");

  if (tableData.length === 0) {
    tbody.innerHTML = "";
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = tableData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    tbody.innerHTML = paginatedItems
      .map((item) => {
        const statusClass = item.status.toLowerCase();
        return `
        <tr>
          <td><span class="invoice-pill">${escapeHtml(item.id)}</span></td>
          <td>${formatDate(item.date)}</td>
          <td style="font-weight: 600; color: #0f172a;">${escapeHtml(item.customer)}</td>
          <td>${escapeHtml(item.product)}</td>
          <td>${escapeHtml(item.category)}</td>
          <td>${escapeHtml(item.rep)}</td>
          <td style="font-weight: 700;">${formatCurrency(item.amount)}</td>
          <td>
            <span class="status-badge ${statusClass}">
              ● ${escapeHtml(item.status)}
            </span>
          </td>
          <td>
            <div class="row-actions">
              <button class="icon-action-btn" title="Edit sale" onclick="openEditModal('${item.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button class="icon-action-btn delete-btn" title="Delete sale" onclick="deleteSale('${item.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      `;
      })
      .join("");
  }

  // Update Pagination Controls
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const info = document.getElementById("pagination-info");
  const prevBtn = document.getElementById("btn-prev-page");
  const nextBtn = document.getElementById("btn-next-page");
  const pageContainer = document.getElementById("page-numbers-container");

  info.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage <= 1;
  nextBtn.disabled = currentPage >= totalPages;

  let pageButtonsHtml = "";
  for (let i = 1; i <= totalPages; i++) {
    pageButtonsHtml += `
      <button class="page-num-btn ${i === currentPage ? "active" : ""}" onclick="goToPage(${i})">
        ${i}
      </button>
    `;
  }
  pageContainer.innerHTML = pageButtonsHtml;
}

window.goToPage = function (pageNumber) {
  currentPage = pageNumber;
  const dateFiltered = getDateFilteredSales();
  updateTransactionsTable(dateFiltered);
};

// ==========================================
// 8. CRUD Actions & Modal Controls
// ==========================================

const saleModal = document.getElementById("sale-modal");
const saleForm = document.getElementById("sale-form");
const openAddBtn = document.getElementById("open-add-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cancelModalBtn = document.getElementById("cancel-modal-btn");

function openAddModal() {
  document.getElementById("modal-title").textContent = "Record New Sale";
  document.getElementById("sale-id-input").value = "";
  saleForm.reset();

  // Set default date to today
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("form-date").value = today;

  saleModal.classList.add("open");
}

window.openEditModal = function (id) {
  const sale = salesData.find((s) => s.id === id);
  if (!sale) return;

  document.getElementById("modal-title").textContent = `Edit Sale (${sale.id})`;
  document.getElementById("sale-id-input").value = sale.id;
  document.getElementById("form-customer").value = sale.customer;
  document.getElementById("form-date").value = sale.date;
  document.getElementById("form-product").value = sale.product;
  document.getElementById("form-category").value = sale.category;
  document.getElementById("form-amount").value = sale.amount;
  document.getElementById("form-quantity").value = sale.quantity || 1;
  document.getElementById("form-channel").value = sale.channel || "Direct Sales";
  document.getElementById("form-rep").value = sale.rep;
  document.getElementById("form-payment").value = sale.paymentMethod || "Credit Card";
  document.getElementById("form-status").value = sale.status;

  saleModal.classList.add("open");
};

function closeModal() {
  saleModal.classList.remove("open");
  saleForm.reset();
}

saleForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const idInput = document.getElementById("sale-id-input").value;
  const customer = document.getElementById("form-customer").value.trim();
  const date = document.getElementById("form-date").value;
  const product = document.getElementById("form-product").value.trim();
  const category = document.getElementById("form-category").value;
  const amount = parseFloat(document.getElementById("form-amount").value);
  const quantity = parseInt(document.getElementById("form-quantity").value, 10) || 1;
  const channel = document.getElementById("form-channel").value;
  const rep = document.getElementById("form-rep").value;
  const paymentMethod = document.getElementById("form-payment").value;
  const status = document.getElementById("form-status").value;

  if (idInput) {
    // Edit Existing
    const index = salesData.findIndex((s) => s.id === idInput);
    if (index !== -1) {
      salesData[index] = {
        ...salesData[index],
        customer,
        date,
        product,
        category,
        amount,
        quantity,
        channel,
        rep,
        paymentMethod,
        status
      };
      showToast(`Sale ${idInput} updated successfully!`, "success");
    }
  } else {
    // Create New
    const newId = `INV-${Math.floor(1000 + Math.random() * 9000)}`;
    const newSale = {
      id: newId,
      date,
      customer,
      product,
      category,
      channel,
      amount,
      quantity,
      status,
      rep,
      paymentMethod
    };
    salesData.unshift(newSale);
    showToast(`New transaction ${newId} recorded!`, "success");
  }

  saveSalesData();
  closeModal();
  refreshDashboard();
});

window.deleteSale = function (id) {
  if (confirm(`Are you sure you want to delete invoice ${id}?`)) {
    salesData = salesData.filter((s) => s.id !== id);
    saveSalesData();
    refreshDashboard();
    showToast(`Invoice ${id} removed.`, "info");
  }
};

// ==========================================
// 9. Export to CSV Feature
// ==========================================

function exportCSV() {
  if (salesData.length === 0) {
    showToast("No data available to export.", "error");
    return;
  }

  const headers = [
    "Invoice ID",
    "Date",
    "Customer",
    "Product",
    "Category",
    "Channel",
    "Amount",
    "Quantity",
    "Sales Rep",
    "Payment Method",
    "Status"
  ];

  const rows = salesData.map((s) => [
    s.id,
    s.date,
    `"${s.customer.replace(/"/g, '""')}"`,
    `"${s.product.replace(/"/g, '""')}"`,
    s.category,
    s.channel || "Direct Sales",
    s.amount,
    s.quantity || 1,
    `"${s.rep.replace(/"/g, '""')}"`,
    s.paymentMethod || "Credit Card",
    s.status
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `sales_pulse_export_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("CSV file exported successfully!", "success");
}

// ==========================================
// 10. Data Reset
// ==========================================

function resetToDefaultData() {
  if (confirm("Reset all sales records back to default sample dataset?")) {
    salesData = JSON.parse(JSON.stringify(SEED_SALES_DATA));
    saveSalesData();
    currentPage = 1;
    refreshDashboard();
    showToast("Sales database reset to factory samples.", "info");
  }
}

// ==========================================
// 11. Toast System & Utilities
// ==========================================

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function formatCurrency(num) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(num);
}

function formatDate(dateString) {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length === 3) {
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[month - 1]} ${day}, ${year}`;
  }
  return dateString;
}

function formatDateShort(dateString) {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length === 3) {
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[month - 1]} ${day}`;
  }
  return dateString;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// 12. Orchestration & Event Listeners
// ==========================================

function refreshDashboard() {
  const dateFiltered = getDateFilteredSales();
  updateKPIs(dateFiltered);
  updateCharts(dateFiltered);
  updateRankingWidgets(dateFiltered);
  updateTransactionsTable(dateFiltered);
  updateStorageStatus();
}

function setupEventListeners() {
  // Topbar Date Filter
  document.getElementById("time-range-select").addEventListener("change", () => {
    currentPage = 1;
    refreshDashboard();
  });

  // Table filters & search
  document.getElementById("search-input").addEventListener("input", () => {
    currentPage = 1;
    const dateFiltered = getDateFilteredSales();
    updateTransactionsTable(dateFiltered);
  });

  document.getElementById("filter-category").addEventListener("change", () => {
    currentPage = 1;
    const dateFiltered = getDateFilteredSales();
    updateTransactionsTable(dateFiltered);
  });

  document.getElementById("filter-status").addEventListener("change", () => {
    currentPage = 1;
    const dateFiltered = getDateFilteredSales();
    updateTransactionsTable(dateFiltered);
  });

  document.getElementById("sort-by").addEventListener("change", () => {
    const dateFiltered = getDateFilteredSales();
    updateTransactionsTable(dateFiltered);
  });

  // Modal Controls
  openAddBtn.addEventListener("click", openAddModal);
  closeModalBtn.addEventListener("click", closeModal);
  cancelModalBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside
  saleModal.addEventListener("click", (e) => {
    if (e.target === saleModal) closeModal();
  });

  // Export & Reset
  document.getElementById("export-csv-btn").addEventListener("click", exportCSV);
  document.getElementById("reset-data-btn").addEventListener("click", resetToDefaultData);

  // Pagination buttons
  document.getElementById("btn-prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      const dateFiltered = getDateFilteredSales();
      updateTransactionsTable(dateFiltered);
    }
  });

  document.getElementById("btn-next-page").addEventListener("click", () => {
    currentPage++;
    const dateFiltered = getDateFilteredSales();
    updateTransactionsTable(dateFiltered);
  });

  // Chart view toggle (Revenue vs Volume)
  const revBtn = document.getElementById("btn-chart-revenue");
  const volBtn = document.getElementById("btn-chart-volume");

  revBtn.addEventListener("click", () => {
    trendChartMode = "revenue";
    revBtn.classList.add("active");
    volBtn.classList.remove("active");
    renderTrendChart(getDateFilteredSales());
  });

  volBtn.addEventListener("click", () => {
    trendChartMode = "volume";
    volBtn.classList.add("active");
    revBtn.classList.remove("active");
    renderTrendChart(getDateFilteredSales());
  });

  // Sidebar navigation anchor links
  document.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", (e) => {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");

      const tab = link.getAttribute("data-tab");
      if (tab === "transactions") {
        document.getElementById("transactions-section").scrollIntoView({ behavior: "smooth" });
      } else if (tab === "analytics") {
        document.querySelector(".charts-row").scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

// ==========================================
// Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadSalesData();
  setupEventListeners();
  refreshDashboard();
});
