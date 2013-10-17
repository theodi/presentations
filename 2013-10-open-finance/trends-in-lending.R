setwd("~/git/presentations/2013-10-open-finance")
library(rCharts)
trends <- read.csv("trends-in-lending.csv", stringsAsFactors = FALSE)
trends <- transform(trends, Date = as.Date(paste("01", Date), format = "%d %b %Y"))
trends <- transform(trends, Date = as.character(Date))

m1 <- mPlot(x = "Date", y = c("Funding.for.Lending..FLS."), type = "Line", data = trends)
m1$set(pointSize = 0, lineWidth = 2)
m1$print("chart1")
