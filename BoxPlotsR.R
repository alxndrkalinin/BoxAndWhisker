dat32 = read.csv("/Users/alxndrkalinin/Projects/ImageProcs/Visualize/BoxPlots/Sy5y_NoDiff_Control_2D_N32.csv", header = TRUE)
dat33 = read.csv("/Users/alxndrkalinin/Projects/ImageProcs/Visualize/BoxPlots/Sy5y_NoDiff_Cort_2D_N33.csv", header = TRUE)
dat34 = read.csv("/Users/alxndrkalinin/Projects/ImageProcs/Visualize/BoxPlots/Sy5y_NoDiff_Control_3D_N34.csv", header = TRUE)
dat35 = read.csv("/Users/alxndrkalinin/Projects/ImageProcs/Visualize/BoxPlots/Sy5y_NoDiff_Cort_3D_N35.csv", header = TRUE)
dat36 = read.csv("/Users/alxndrkalinin/Projects/ImageProcs/Visualize/BoxPlots/Sy5y_Diff_Control_2D_N36.csv", header = TRUE)
dat37 = read.csv("/Users/alxndrkalinin/Projects/ImageProcs/Visualize/BoxPlots/Sy5y_Diff_Cort_2D_N37.csv", header = TRUE)
dat38 = read.csv("/Users/alxndrkalinin/Projects/ImageProcs/Visualize/BoxPlots/Sy5y_Diff_Control_3D_N38.csv", header = TRUE)
dat39 = read.csv("/Users/alxndrkalinin/Projects/ImageProcs/Visualize/BoxPlots/Sy5y_Diff_Cort_3D_N39.csv", header = TRUE)

boxplot(dat32$AvgMeanCurvature,dat33$AvgMeanCurvature, dat34$AvgMeanCurvature,
        dat35$AvgMeanCurvature,dat36$AvgMeanCurvature, dat37$AvgMeanCurvature,
        dat38$AvgMeanCurvature,dat39$AvgMeanCurvature)
title(main = "AvgMeanCurvature\n")
axis(1, at=1:8, lab=c("32","33","34","35","36","37","38","39"), side=3)