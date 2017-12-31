// Personal Information
var members = {
	"Linqing Liu":{

	},
	"Shuo Wang":{

	},
	"Keji Han":{

	},
	"Jie Hang":{

	},
}


var papers = [];
var presentations = [];

$.getJSON("vendor/resource/presentation.json", function(data){
	presentations = data["data"];
})

$.getJSON("vendor/resource/paper.json", function(data){
	papers = data;
})


// Paper Information
// var papers = {
// 	"SeqGAN: Sequence Generative Adversarial Nets with Policy Gradient":{
// 		"PDF":"http://www.aaai.org/ocs/index.php/AAAI/AAAI17/paper/download/14344/14489",
// 		"PDF_Local":"resource/2017-12/14344-66977-1-PB.pdf",
// 		"Supplement":{
// 			"2017-02-07-aaai-seqgan.pdf":{
// 				"Type":"PPT",
// 				"URL":"http://lantaoyu.github.io/files/2017-02-07-aaai-seqgan.pdf",
// 				"URL_Local":"resource/2017-12/2017-02-07-aaai-seqgan.pdf",
// 			},
// 		}
// 	},
// 	"STRICT: Information Retrieval Based Search Term Identification for Concept Location":{
// 		"PDF":"http://ieeexplore.ieee.org/abstract/document/7884611",
// 		"PDF_Local":"resource/2017-12/Information Retrieval Based Search Term.pdf",
// 		"Supplement":{
// 			"STRICT-SANER2017.pptx":{
// 				"Type":"PPT",
// 				"URL_Local":"resource/2017-12/STRICT-SANER2017.pptx",
// 			},
// 			"2017-12-30 representation.pptx":{
// 				"Type":"PPT",
// 				"URL":"resource/2017-12/2017-12-30-representation.pptx",
// 				"URL_Local":"resource/2017-12/2017-12-30-representation.pptx",
// 			},
// 		}
// 	},

// 	"In Defense of Fully Connected Layers in Visual Representation Transfer":{
// 		"PDF":"https://pdfs.semanticscholar.org/4642/15c3c882596b028e98aa05b88ce30c0e9496.pdf",
// 		"PDF_Local":"resource/2017-12/PCM2017_FC.pdf",
// 		"Supplement":{
// 			"12.23周末讨论.pptx":{
// 				"Type":"PPT",
// 				"URL":"resource/2017-12/12.23周末讨论.pptx",
// 				"URL_Local":"resource/2017-12/12.23周末讨论.pptx",
// 			}
// 		}
// 	},

// 	"Generating Adversarial Malware Examples for Black-Box Attacks Based on GAN":{
// 		"PDF":"https://arxiv.org/abs/1702.05983",
// 		"PDF_Local":"MalGAN_IJCAI_2017_Hu_Tan.pdf",
// 		"Supplement":{
// 			"Generating Adversarial Malware Examples for Black-Box Attacks Based on GAN.pptx":{
// 				"Type":"PPT",
// 				"URL":"resource/2017-12/Generating Adversarial Malware Examples for Black-Box Attacks Based on GAN.pptx",
// 				"URL_Local":"resource/2017-12/Generating Adversarial Malware Examples for Black-Box Attacks Based on GAN.pptx",
// 			}
// 		}
// 	},

// 	"":{
// 		"PDF":"",
// 		"PDF_Local":"",
// 		"Supplement":{
// 			"":{
// 				"Type":"",
// 				"URL":"",
// 				"URL_Local":"",
// 			}
// 		}
// 	},
// }