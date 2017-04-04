#include "node.h"
#include <stdio.h>
#include <opencv2/opencv.hpp>
using namespace cv;
using namespace std;


int main(int argc, char const *argv[]) {

  try {
    imwrite("dog.png");
  }
  catch(runtime_errpr&ex){
    fprintf(stderr, "Exception converting image to PNG format: %s\n", ex.what());
        return 1;
  }
  return 0;
}
